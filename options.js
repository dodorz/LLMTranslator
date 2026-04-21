const BUILTIN_PROVIDER_TEMPLATES = {
    gemini: {
        id: 'gemini',
        name: 'Gemini',
        type: 'gemini',
        defaultEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
        defaultModels: ['gemini-flash-lite-latest'],
        apiKeyRequired: true
    },
    openai: {
        id: 'openai',
        name: 'OpenAI',
        type: 'openai',
        defaultEndpoint: 'https://api.openai.com/v1',
        defaultModels: ['gpt-5-nano'],
        apiKeyRequired: true
    },
    deepseek: {
        id: 'deepseek',
        name: 'DeepSeek',
        type: 'deepseek',
        defaultEndpoint: 'https://api.deepseek.com/v1',
        defaultModels: ['deepseek-chat'],
        apiKeyRequired: true
    },
    anthropic: {
        id: 'anthropic',
        name: 'Anthropic',
        type: 'anthropic',
        defaultEndpoint: 'https://api.anthropic.com/v1',
        defaultModels: ['claude-sonnet-4-5-20250929'],
        apiKeyRequired: true
    },
    xai: {
        id: 'xai',
        name: 'xAI',
        type: 'xai',
        defaultEndpoint: 'https://api.x.ai/v1',
        defaultModels: ['grok-4-fast-non-reasoning'],
        apiKeyRequired: true
    },
    ollama: {
        id: 'ollama',
        name: 'Ollama',
        type: 'ollama',
        defaultEndpoint: 'http://localhost:11434',
        defaultModels: ['llama3'],
        apiKeyRequired: false
    },
    lmstudio: {
        id: 'lmstudio',
        name: 'LM Studio',
        type: 'lmstudio',
        defaultEndpoint: 'http://localhost:1234',
        defaultModels: [''],
        apiKeyRequired: false
    }
};

const PROVIDER_TYPE_OPTIONS = [
    { value: 'gemini', label: 'Gemini' },
    { value: 'openai', label: 'OpenAI-compatible' },
    { value: 'deepseek', label: 'DeepSeek-compatible' },
    { value: 'anthropic', label: 'Anthropic-compatible' },
    { value: 'xai', label: 'xAI-compatible' },
    { value: 'ollama', label: 'Ollama-compatible' },
    { value: 'lmstudio', label: 'LM Studio-compatible' }
];

let providerConfigs = [];
let selectedProviderId = '';
let currentLang = 'en';
let currentTestRequestId = null;
let statusHideTimerId = null;

document.addEventListener('DOMContentLoaded', initOptionsPage);

async function initOptionsPage() {
    try {
        const items = await chrome.storage.local.get([
            'targetLanguage',
            'apiProvider',
            'providerConfigs',
            'batchSize',
            'maxBatchLength',
            'delayBetweenRequests',
            'maxToken',
            'concurrencyLimit',
            'maxRetries',
            'timeout',
            'toggleBlueBackground',
            'realTimeTranslation',
            'showProgressPopup',
            'excludeList',
            'hidePromptAllSites'
        ]);

        currentLang = items.targetLanguage || 'en';
        providerConfigs = normalizeProviderConfigs(items);
        selectedProviderId = (items.apiProvider && providerConfigs.some(config => config.id === items.apiProvider))
            ? items.apiProvider
            : (providerConfigs[0]?.id || '');

        renderProviderSelect();
        bindProviderControls();
        fillSettings(items);
        renderSelectedProvider();
        updateUiText();
    } catch (error) {
        console.error('Error loading settings:', error);
        showStatus('Error loading settings.', 'error');
    }
}

function normalizeProviderConfigs(items) {
    if (Array.isArray(items.providerConfigs)) {
        return items.providerConfigs.map((config, index) => normalizeProviderConfig(config, index));
    }

    return Object.keys(BUILTIN_PROVIDER_TEMPLATES).map(id => {
        const template = BUILTIN_PROVIDER_TEMPLATES[id];
        const legacy = buildLegacyProviderSnapshot(items, id, template);
        return normalizeProviderConfig({
            id,
            name: template.name,
            type: template.type,
            apiKey: legacy.apiKey,
            endpoint: legacy.endpoint,
            models: legacy.models,
            unloadAfterTranslation: legacy.unloadAfterTranslation
        });
    });
}

function buildLegacyProviderSnapshot(items, id, template) {
    const apiKeyMap = {
        gemini: items.geminiApiKey,
        openai: items.openaiApiKey,
        deepseek: items.deepseekApiKey,
        anthropic: items.anthropicApiKey,
        xai: items.xaiApiKey,
        ollama: items.ollamaApiKey,
        lmstudio: items.lmstudioApiKey
    };
    const endpointMap = {
        gemini: items.geminiApiEndpoint,
        openai: items.openaiApiEndpoint,
        deepseek: items.deepseekApiEndpoint,
        anthropic: items.anthropicApiEndpoint,
        xai: items.xaiApiEndpoint,
        ollama: items.ollamaApiEndpoint,
        lmstudio: items.lmstudioApiEndpoint
    };
    const modelMap = {
        gemini: items.geminiModel,
        openai: items.openaiModel,
        deepseek: items.deepseekModel,
        anthropic: items.anthropicModel,
        xai: items.xaiModel,
        ollama: items.ollamaModel,
        lmstudio: items.lmstudioModel
    };

    return {
        apiKey: (apiKeyMap[id] || '').trim?.() || '',
        endpoint: (endpointMap[id] || '').trim?.() || template.defaultEndpoint,
        models: parseModels(modelMap[id] || template.defaultModels.join('\n')),
        unloadAfterTranslation: items.ollamaUnloadAfterTranslation === true && id === 'ollama'
    };
}

function normalizeProviderConfig(config, index) {
    const template = BUILTIN_PROVIDER_TEMPLATES[config?.type] || BUILTIN_PROVIDER_TEMPLATES[config?.id] || BUILTIN_PROVIDER_TEMPLATES.openai;
    const id = sanitizeProviderId(config?.id || config?.name || `${template.id}-${index}`);
    return {
        id,
        name: (config?.name || template.name || id).trim(),
        type: normalizeProviderType(config?.type || template.type),
        apiKey: (config?.apiKey || '').trim(),
        endpoint: (config?.endpoint || template.defaultEndpoint || '').trim(),
        models: parseModels(Array.isArray(config?.models) ? config.models.join('\n') : (config?.models || config?.model || template.defaultModels.join('\n'))),
        unloadAfterTranslation: config?.unloadAfterTranslation === true
    };
}

function normalizeProviderType(type) {
    return PROVIDER_TYPE_OPTIONS.some(option => option.value === type) ? type : 'openai';
}

function sanitizeProviderId(value) {
    const normalized = String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return normalized || 'provider';
}

function parseModels(input) {
    if (Array.isArray(input)) {
        return input.map(item => String(item || '').trim()).filter(Boolean);
    }
    return String(input || '')
        .split(/[\n,]/)
        .map(item => item.trim())
        .filter(Boolean);
}

function formatModels(models) {
    return (models && models.length > 0 ? models : ['']).join('\n');
}

function getProviderConfig(providerId) {
    return providerConfigs.find(config => config.id === providerId) || null;
}

function renderProviderSelect() {
    const select = document.getElementById('apiProvider');
    select.innerHTML = '';

    providerConfigs.forEach(config => {
        const option = document.createElement('option');
        option.value = config.id;
        option.textContent = config.name;
        select.appendChild(option);
    });

    if (providerConfigs.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No provider configured';
        option.disabled = true;
        option.selected = true;
        select.appendChild(option);
    }

    select.value = selectedProviderId;
}

function bindProviderControls() {
    const providerSelect = document.getElementById('apiProvider');
    providerSelect.addEventListener('change', async () => {
        try {
            await persistCurrentProvider();
        } catch (error) {
            console.error('Error auto-saving provider before switching:', error);
            showStatus('Error saving provider.', 'error');
            providerSelect.value = selectedProviderId;
            return;
        }
        selectedProviderId = providerSelect.value;
        renderSelectedProvider();
    });

    document.getElementById('saveProviderBtn').addEventListener('click', async () => {
        await persistCurrentProvider('Provider saved.');
    });

    document.getElementById('testProviderBtn').addEventListener('click', async () => {
        await testCurrentProvider();
    });

    document.getElementById('addProviderBtn').addEventListener('click', async () => {
        saveSelectedProviderFromForm();
        const provider = createDefaultCustomProvider();
        providerConfigs.push(provider);
        selectedProviderId = provider.id;
        renderProviderSelect();
        renderSelectedProvider();
        await persistProviderConfigs('Provider added.');
    });

    document.getElementById('duplicateProviderBtn').addEventListener('click', async () => {
        saveSelectedProviderFromForm();
        const current = getProviderConfig(selectedProviderId);
        if (!current) {
            return;
        }
        const duplicate = {
            ...current,
            id: generateUniqueProviderId(`${current.name}-copy`),
            name: `${current.name} Copy`
        };
        providerConfigs.push(duplicate);
        selectedProviderId = duplicate.id;
        renderProviderSelect();
        renderSelectedProvider();
        await persistProviderConfigs('Provider duplicated.');
    });

    document.getElementById('removeProviderBtn').addEventListener('click', async () => {
        const current = getProviderConfig(selectedProviderId);
        if (!current) {
            showStatus('No provider selected.', 'error');
            return;
        }
        providerConfigs = providerConfigs.filter(config => config.id !== current.id);
        selectedProviderId = providerConfigs[0]?.id || '';
        renderProviderSelect();
        renderSelectedProvider();
        await persistProviderConfigs('Provider removed.');
    });

    document.getElementById('providerType').addEventListener('change', () => {
        renderProviderHints();
    });

    document.getElementById('saveBtn').addEventListener('click', saveSettings);
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.action !== 'testProviderStatus') {
        return false;
    }
    if (!currentTestRequestId || request.requestId !== currentTestRequestId) {
        return false;
    }
    setProviderTestLog(request.message || 'Testing provider...', request.type || 'info');
    showStatus(request.message || 'Testing provider...', request.type || 'info', 0);
    return false;
});

function fillSettings(items) {
    document.getElementById('targetLanguage').value = items.targetLanguage || 'en';
    document.getElementById('batchSize').value = items.batchSize || 80;
    document.getElementById('maxBatchLength').value = items.maxBatchLength || 5000;
    document.getElementById('delayBetweenRequests').value = items.delayBetweenRequests || 2500;
    document.getElementById('maxToken').value = items.maxToken || 8192;
    document.getElementById('concurrencyLimit').value = items.concurrencyLimit || 10;
    document.getElementById('maxRetries').value = items.maxRetries !== undefined ? items.maxRetries : 3;
    document.getElementById('timeout').value = items.timeout || 300;
    document.getElementById('toggleBlueBackground').checked = items.toggleBlueBackground === true;
    document.getElementById('realTimeTranslation').checked = items.realTimeTranslation === true;
    document.getElementById('showProgressPopup').checked = items.showProgressPopup !== false;
    document.getElementById('hidePromptAllSites').checked = items.hidePromptAllSites === true;
    document.getElementById('excludeList').value = Array.isArray(items.excludeList) ? items.excludeList.join('\n') : '';
}

function renderSelectedProvider() {
    const provider = getProviderConfig(selectedProviderId) || null;
    if (!provider) {
        document.getElementById('providerName').value = '';
        document.getElementById('providerApiKey').value = '';
        document.getElementById('providerEndpoint').value = '';
        document.getElementById('providerModels').value = '';
        document.getElementById('providerUnloadAfterTranslation').checked = false;
        document.getElementById('providerType').disabled = false;
        document.getElementById('saveProviderBtn').disabled = true;
        document.getElementById('testProviderBtn').disabled = true;
        document.getElementById('duplicateProviderBtn').disabled = true;
        document.getElementById('removeProviderBtn').disabled = true;
        return;
    }

    const select = document.getElementById('apiProvider');
    if (select.value !== provider.id) {
        select.value = provider.id;
    }

    document.getElementById('providerName').value = provider.name || '';
    document.getElementById('providerType').value = provider.type || 'openai';
    document.getElementById('providerApiKey').value = provider.apiKey || '';
    document.getElementById('providerEndpoint').value = provider.endpoint || '';
    document.getElementById('providerModels').value = formatModels(provider.models);
    document.getElementById('providerUnloadAfterTranslation').checked = provider.unloadAfterTranslation === true;

    document.getElementById('providerType').disabled = false;
    document.getElementById('saveProviderBtn').disabled = false;
    document.getElementById('testProviderBtn').disabled = false;
    document.getElementById('duplicateProviderBtn').disabled = false;
    document.getElementById('removeProviderBtn').disabled = false;

    renderProviderHints();
    updateProviderPlaceholder();
}

function renderProviderHints() {
    const type = document.getElementById('providerType').value || 'openai';
    const template = BUILTIN_PROVIDER_TEMPLATES[type] || BUILTIN_PROVIDER_TEMPLATES.openai;
    const providerType = type;

    document.getElementById('providerEndpointHelp').textContent = `Default endpoint: ${template.defaultEndpoint}`;
    document.getElementById('providerModelsHelp').textContent = template.defaultModels.length > 1
        ? 'Multiple model names are tried in order.'
        : 'Multiple model names are tried in order until one works.';
    document.getElementById('providerUnloadHelp').textContent = providerType === 'ollama' || providerType === 'lmstudio'
        ? 'Useful for local providers that can unload the active model.'
        : 'Usually only needed for local providers.';
}

function updateProviderPlaceholder() {
    const type = document.getElementById('providerType').value || 'openai';
    const template = BUILTIN_PROVIDER_TEMPLATES[type] || BUILTIN_PROVIDER_TEMPLATES.openai;
    document.getElementById('providerApiKey').placeholder = template.apiKeyRequired
        ? `Enter the ${template.name} API key`
        : `Enter the ${template.name} API key (optional)`;
    document.getElementById('providerEndpoint').placeholder = template.defaultEndpoint;
    document.getElementById('providerModels').placeholder = template.defaultModels.join('\n');
}

function saveSelectedProviderFromForm() {
    const current = getProviderConfig(selectedProviderId);
    if (!current) {
        return;
    }

    const updated = {
        ...current,
        name: document.getElementById('providerName').value.trim() || current.name,
        type: document.getElementById('providerType').value || current.type,
        apiKey: document.getElementById('providerApiKey').value.trim(),
        endpoint: document.getElementById('providerEndpoint').value.trim(),
        models: parseModels(document.getElementById('providerModels').value),
        unloadAfterTranslation: document.getElementById('providerUnloadAfterTranslation').checked
    };

    providerConfigs = providerConfigs.map(config => config.id === current.id ? updated : config);
}

function buildProviderFromCurrentForm() {
    const current = getProviderConfig(selectedProviderId);
    if (!current) {
        return null;
    }
    return {
        ...current,
        name: document.getElementById('providerName').value.trim() || current.name,
        type: document.getElementById('providerType').value || current.type,
        apiKey: document.getElementById('providerApiKey').value.trim(),
        endpoint: document.getElementById('providerEndpoint').value.trim(),
        models: parseModels(document.getElementById('providerModels').value),
        unloadAfterTranslation: document.getElementById('providerUnloadAfterTranslation').checked
    };
}

async function persistCurrentProvider(statusMessage) {
    saveSelectedProviderFromForm();
    await persistProviderConfigs(statusMessage);
}

async function testCurrentProvider() {
    const provider = buildProviderFromCurrentForm();
    if (!provider) {
        showStatus('No provider selected.', 'error');
        return;
    }

    const testLanguage = document.getElementById('targetLanguage').value || 'en';
    const testButton = document.getElementById('testProviderBtn');
    const previousLabel = testButton.textContent;
    const requestId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    currentTestRequestId = requestId;
    testButton.disabled = true;
    testButton.textContent = 'Testing...';
    setProviderTestLog('Preparing provider test...', 'info');
    showStatus('Preparing provider test...', 'info', 0);

    try {
        const response = await sendRuntimeMessage({
            action: 'testProvider',
            requestId,
            provider,
            targetLanguage: testLanguage
        });
        if (!response) {
            throw new Error('No response from background.');
        }
        if (!response.success) {
            throw new Error(response.error || 'Provider test failed.');
        }
        setProviderTestLog(response.message || 'Provider test succeeded.', 'success');
        showStatus(response.message || 'Provider test succeeded.', 'success', 8000);
    } catch (error) {
        console.error('Provider test failed:', error);
        setProviderTestLog(error.message || 'Provider test failed.', 'error');
        showStatus(error.message || 'Provider test failed.', 'error', 8000);
    } finally {
        if (currentTestRequestId === requestId) {
            currentTestRequestId = null;
        }
        testButton.disabled = false;
        testButton.textContent = previousLabel;
    }
}

function sendRuntimeMessage(message) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(message, response => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
                return;
            }
            resolve(response);
        });
    });
}

async function persistProviderConfigs(statusMessage) {
    const saveData = {
        apiProvider: selectedProviderId || '',
        providerConfigs: providerConfigs.map(config => ({
            ...config,
            models: Array.isArray(config.models) ? config.models : parseModels(config.models)
        }))
    };
    const provider = getProviderConfig(selectedProviderId);
    if (provider) {
        Object.assign(saveData, buildLegacyStorageSnapshot(provider));
    }

    try {
        await chrome.storage.local.set(saveData);
        if (statusMessage) {
            showStatus(statusMessage, 'success');
        }
    } catch (error) {
        console.error('Error saving provider config:', error);
        showStatus('Error saving provider.', 'error');
    }
}

function createDefaultCustomProvider() {
    const type = 'openai';
    const template = BUILTIN_PROVIDER_TEMPLATES[type];
    const id = generateUniqueProviderId('custom-provider');
    return {
        id,
        name: 'Custom Provider',
        type,
        apiKey: '',
        endpoint: template.defaultEndpoint,
        models: [...template.defaultModels],
        unloadAfterTranslation: false
    };
}

function generateUniqueProviderId(baseId) {
    const sanitized = sanitizeProviderId(baseId);
    let candidate = sanitized;
    let counter = 1;
    while (providerConfigs.some(config => config.id === candidate)) {
        candidate = `${sanitized}-${counter++}`;
    }
    return candidate;
}

async function saveSettings() {
    saveSelectedProviderFromForm();
    const provider = getProviderConfig(selectedProviderId);

    const targetLanguage = document.getElementById('targetLanguage').value;
    const batchSize = parseInt(document.getElementById('batchSize').value, 10) || 80;
    const maxBatchLength = parseInt(document.getElementById('maxBatchLength').value, 10) || 5000;
    const delayBetweenRequests = parseInt(document.getElementById('delayBetweenRequests').value, 10) || 2500;
    const maxToken = parseInt(document.getElementById('maxToken').value, 10) || 8192;
    const concurrencyLimit = parseInt(document.getElementById('concurrencyLimit').value, 10) || 10;
    const maxRetries = parseInt(document.getElementById('maxRetries').value, 10);
    const timeout = parseInt(document.getElementById('timeout').value, 10);
    const toggleBlueBackground = document.getElementById('toggleBlueBackground').checked;
    const realTimeTranslation = document.getElementById('realTimeTranslation').checked;
    const showProgressPopup = document.getElementById('showProgressPopup').checked;
    const hidePromptAllSites = document.getElementById('hidePromptAllSites').checked;
    const excludeList = document.getElementById('excludeList').value.split(/\r?\n/).map(url => url.trim()).filter(Boolean);

    const saveData = {
        targetLanguage,
        apiProvider: selectedProviderId || '',
        providerConfigs: providerConfigs.map(config => ({
            ...config,
            models: Array.isArray(config.models) ? config.models : parseModels(config.models)
        })),
        batchSize,
        maxBatchLength,
        delayBetweenRequests,
        maxToken,
        concurrencyLimit,
        maxRetries: (maxRetries >= 0 && maxRetries <= 10) ? maxRetries : 3,
        timeout: (timeout >= 1 && timeout <= 600) ? timeout : 300,
        toggleBlueBackground,
        realTimeTranslation,
        showProgressPopup,
        hidePromptAllSites,
        excludeList
    };

    if (provider) {
        Object.assign(saveData, buildLegacyStorageSnapshot(provider));
    }

    try {
        await chrome.storage.local.set(saveData);
        showStatus('Settings saved!', 'success');
    } catch (error) {
        console.error('Error saving settings:', error);
        showStatus('Error saving settings.', 'error');
    }
}

function buildLegacyStorageSnapshot(provider) {
    const legacy = {};
    const byType = provider?.type || 'openai';
    if (byType === 'gemini') {
        legacy.geminiApiKey = provider.apiKey || '';
        legacy.geminiApiEndpoint = provider.endpoint || '';
        legacy.geminiModel = provider.models?.[0] || '';
    } else if (byType === 'openai') {
        legacy.openaiApiKey = provider.apiKey || '';
        legacy.openaiApiEndpoint = provider.endpoint || '';
        legacy.openaiModel = provider.models?.[0] || '';
    } else if (byType === 'deepseek') {
        legacy.deepseekApiKey = provider.apiKey || '';
        legacy.deepseekApiEndpoint = provider.endpoint || '';
        legacy.deepseekModel = provider.models?.[0] || '';
    } else if (byType === 'anthropic') {
        legacy.anthropicApiKey = provider.apiKey || '';
        legacy.anthropicApiEndpoint = provider.endpoint || '';
        legacy.anthropicModel = provider.models?.[0] || '';
    } else if (byType === 'xai') {
        legacy.xaiApiKey = provider.apiKey || '';
        legacy.xaiApiEndpoint = provider.endpoint || '';
        legacy.xaiModel = provider.models?.[0] || '';
    } else if (byType === 'ollama') {
        legacy.ollamaApiKey = provider.apiKey || '';
        legacy.ollamaApiEndpoint = provider.endpoint || '';
        legacy.ollamaModel = provider.models?.[0] || '';
        legacy.ollamaUnloadAfterTranslation = provider.unloadAfterTranslation === true;
    } else if (byType === 'lmstudio') {
        legacy.lmstudioApiKey = provider.apiKey || '';
        legacy.lmstudioApiEndpoint = provider.endpoint || '';
        legacy.lmstudioModel = provider.models?.[0] || '';
    }
    return legacy;
}

function updateUiText() {
    const currentProviderType = document.getElementById('providerType').value || 'openai';
    document.getElementById('pageTitle').textContent = 'LLM Website Translator Settings';
    document.getElementById('header').textContent = 'LLM Website Translator Settings';
    document.getElementById('apiProviderLabel').textContent = 'Active Provider:';
    document.getElementById('apiProviderHelp').textContent = 'Choose the provider used for translation.';
    document.getElementById('providerNameLabel').textContent = 'Provider Name:';
    document.getElementById('providerNameHelp').textContent = 'Display name shown in the provider list.';
    document.getElementById('providerTypeLabel').textContent = 'Request Template:';
    document.getElementById('providerTypeHelp').textContent = 'The API shape used when sending translation requests.';
    document.getElementById('providerApiKeyLabel').textContent = 'API Key:';
    document.getElementById('providerApiKeyHelp').textContent = 'Stored locally in the browser.';
    document.getElementById('providerEndpointLabel').textContent = 'HTTP Endpoint URL:';
    document.getElementById('providerEndpointHelp').textContent = 'Optional. Overrides the default HTTP endpoint for this provider.';
    document.getElementById('providerModelsLabel').textContent = 'Model Names:';
    document.getElementById('providerModelsHelp').textContent = 'Multiple model names are tried in order until one works.';
    document.getElementById('providerUnloadLabel').textContent = 'Unload model after request:';
    document.getElementById('providerUnloadHelp').textContent = 'Useful for local Ollama-style providers.';
    document.getElementById('languageLabel').textContent = 'Language:';
    document.getElementById('saveProviderBtn').textContent = 'Save Provider';
    document.getElementById('testProviderBtn').textContent = 'Test Provider';
    document.getElementById('addProviderBtn').textContent = 'Add Provider';
    document.getElementById('duplicateProviderBtn').textContent = 'Duplicate Provider';
    document.getElementById('removeProviderBtn').textContent = 'Remove Provider';
    document.getElementById('batchSizeLabel').textContent = 'Batch Size (Number of Texts):';
    document.getElementById('batchSizeHelp').textContent = 'Max number of text pieces per API request. Larger values can be faster but may cause errors.';
    document.getElementById('maxBatchLengthLabel').textContent = 'Max Batch Length (Characters):';
    document.getElementById('maxBatchLengthHelp').textContent = 'Maximum total characters per API request (batch). Prevents exceeding API input limits.';
    document.getElementById('delayBetweenRequestsLabel').textContent = 'Delay Between Requests (ms):';
    document.getElementById('delayBetweenRequestsHelp').textContent = 'Wait time between API calls. Longer delays can help avoid rate limit errors.';
    document.getElementById('maxTokenLabel').textContent = 'Max Output Tokens:';
    document.getElementById('maxTokenHelp').textContent = 'Maximum length of translated text returned in one response.';
    document.getElementById('concurrencyLimitLabel').textContent = 'Concurrency Limit:';
    document.getElementById('concurrencyLimitHelp').textContent = 'Maximum number of API requests processed in parallel.';
    document.getElementById('maxRetriesLabel').textContent = 'Max Retries on Error:';
    document.getElementById('maxRetriesHelp').textContent = 'Maximum retry count for failed requests.';
    document.getElementById('timeoutLabel').textContent = 'API Request Timeout (seconds):';
    document.getElementById('timeoutHelp').textContent = 'Maximum time to wait for an API response.';
    document.getElementById('toggleBlueBackgroundLabel').textContent = 'Translated Text Blue Background:';
    document.getElementById('toggleBlueBackgroundHelp').textContent = 'Toggle whether translated text gets a blue background.';
    document.getElementById('autoTranslationLabel').textContent = 'Automatic Translation:';
    document.getElementById('autoTranslationHelp').textContent = 'If enabled, text to translate will be translated automatically.';
    document.getElementById('showProgressPopupLabel').textContent = 'Show Progress Popup:';
    document.getElementById('showProgressPopupHelp').textContent = 'Toggle whether to show a progress popup during translation.';
    document.getElementById('hidePromptAllSitesLabel').textContent = 'Hide Translation Prompt for All Sites:';
    document.getElementById('hidePromptAllSitesHelp').textContent = 'If enabled, the translation prompt will not appear on any site.';
    document.getElementById('excludeListLabel').textContent = 'List of Sites to Exclude:';
    document.getElementById('excludeListHelp').textContent = 'Enter each URL on a new line. Sites listed here will not be translated automatically.';
    document.getElementById('saveBtn').textContent = 'Save Settings';
    document.getElementById('supportLink').textContent = 'Support';
    document.title = 'LLM Website Translator Settings';

    document.getElementById('providerType').innerHTML = PROVIDER_TYPE_OPTIONS.map(option => `<option value="${option.value}">${option.label}</option>`).join('');
    document.getElementById('providerType').value = currentProviderType;
}

function setProviderTestLog(message, type) {
    const log = document.getElementById('providerTestLog');
    if (!log) {
        return;
    }
    log.textContent = message || '';
    log.className = `test-log ${type || 'info'}`;
}

function showStatus(message, type, durationMs = 3000) {
    const status = document.getElementById('status');
    if (statusHideTimerId) {
        clearTimeout(statusHideTimerId);
        statusHideTimerId = null;
    }
    status.textContent = message;
    status.className = type;
    status.style.display = 'block';
    if (durationMs > 0) {
        statusHideTimerId = setTimeout(() => {
            status.style.display = 'none';
            status.className = '';
            statusHideTimerId = null;
        }, durationMs);
    }
}
