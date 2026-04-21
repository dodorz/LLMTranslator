const errorTranslations = {
    en: { apiKeyNotSet: '{service} API key is not set. Please set it in the options page.', apiEndpointNotSet: '{service} API endpoint is not set. Please set it in the options page.', jsonParseFailed: 'Failed to parse JSON response from {service}.', jsonExtractFailed: 'Failed to extract JSON from {service} response.', apiLimitReached: '{service} API request limit reached. Please try again later.', unsupportedProvider: 'Unsupported API provider selected. Please check the options page.', translationCancelled: 'Translation cancelled.', fetchError: 'Network error or API endpoint unreachable for {service}.', unknownError: 'An unknown error occurred while using {service}.', maxTokensError: '{service} API response truncated due to token limit. Try reducing batch size or max tokens setting.', requestTimeout: '{service} request timed out.', invalidApiKey: '{service} API key is invalid. Please check it in the options page.', insufficientQuota: 'You have insufficient quota for {service}. Please check your plan and billing details.', modelNotFound: 'The specified model for {service} was not found. Please select a different model in the options page.', invalidRequest: 'Invalid request to {service}. Please check the extension settings.', serverError: '{service} is currently unavailable. Please try again later.' },
    ja: { apiKeyNotSet: '{service}のAPIキーが設定されていません。オプションページで設定してください。', apiEndpointNotSet: '{service}のAPIエンドポイントが設定されていません。オプションページで設定してください。', jsonParseFailed: '{service}からのJSON応答の解析に失敗しました。', jsonExtractFailed: '{service}の応答からJSONを抽出できませんでした。', apiLimitReached: '{service}のAPIリクエスト制限に達しました。しばらくしてから再試行してください。', unsupportedProvider: 'サポートされていないAPIプロバイダーです。オプションページを確認してください。', translationCancelled: '翻訳が中止されました', fetchError: '{service}へのネットワークエラーまたはAPIエンドポイントに到達できません。', unknownError: '{service}の使用中に不明なエラーが発生しました。', maxTokensError: '{service}のAPI応答がトークン数上限により途切れました。バッチサイズや最大トークン設定を調整してください。', requestTimeout: '{service}へのリクエストがタイムアウトしました。', invalidApiKey: '{service}のAPIキーが無効です。オプションページで確認してください。', insufficientQuota: '{service}のクォータが不足しています。プランと請求の詳細を確認してください。', modelNotFound: '{service}に指定されたモデルが見つかりませんでした。オプションページで別のモデルを選択してください。', invalidRequest: '{service}へのリクエストが無効です。拡張機能の設定を確認してください。', serverError: '{service}は現在利用できません。しばらくしてから再試行してください。' },
    fr: { apiKeyNotSet: "La clé API {service} n'est pas définie. Veuillez la définir dans la page d'options.", apiEndpointNotSet: "Le point de terminaison de l'API {service} n'est pas défini. Veuillez le définir dans la page d'options.", jsonParseFailed: "Échec de l'analyse de la réponse JSON de {service}.", jsonExtractFailed: "Impossible d'extraire le JSON de la réponse {service}.", apiLimitReached: 'Limite de requêtes API {service} atteinte. Veuillez réessayer plus tard.', unsupportedProvider: "Fournisseur d'API non pris en charge. Veuillez vérifier la page d'options.", translationCancelled: 'Traduction annulée', fetchError: 'Erreur réseau ou point de terminaison API inaccessible pour {service}.', unknownError: "Une erreur inconnue s'est produite lors de l'utilisation de {service}.", maxTokensError: 'Réponse API {service} tronquée en raison de la limite de jetons. Essayez de réduire la taille du lot ou le paramètre de jetons max.', requestTimeout: 'La requête {service} a expiré.' },
    de: { apiKeyNotSet: 'API-Schlüssel für {service} ist nicht gesetzt. Bitte setzen Sie ihn auf der Optionsseite.', apiEndpointNotSet: 'API-Endpunkt für {service} ist nicht gesetzt. Bitte setzen Sie ihn auf der Optionsseite.', jsonParseFailed: 'Fehler beim Parsen der JSON-Antwort von {service}.', jsonExtractFailed: 'JSON konnte nicht aus der {service}-Antwort extrahiert werden.', apiLimitReached: 'API-Anfragelimit für {service} erreicht. Bitte versuchen Sie es später erneut.', unsupportedProvider: 'Nicht unterstützter API-Anbieter ausgewählt. Bitte überprüfen Sie die Optionsseite.', translationCancelled: 'Übersetzung abgebrochen', fetchError: 'Netzwerkfehler oder API-Endpunkt für {service} nicht erreichbar.', unknownError: 'Ein unbekannter Fehler ist bei der Verwendung von {service} aufgetreten.', maxTokensError: 'API-Antwort von {service} aufgrund des Token-Limits abgeschnitten. Versuchen Sie, die Batch-Größe oder die Einstellung für maximale Token zu reduzieren.', requestTimeout: 'Anfrage von {service} hat Zeitüberschreitung.' },
    es: { apiKeyNotSet: 'La clave API de {service} no está configurada. Por favor, configúrela en la página de opciones.', apiEndpointNotSet: 'El punto final de la API de {service} no está configurado. Por favor, configúrelo en la página de opciones.', jsonParseFailed: 'Error al analizar la respuesta JSON de {service}.', jsonExtractFailed: 'No se pudo extraer JSON de la respuesta de {service}.', apiLimitReached: 'Se alcanzó el límite de solicitudes API de {service}. Inténtelo de nuevo más tarde.', unsupportedProvider: 'Proveedor de API no compatible seleccionado. Por favor, compruebe la página de opciones.', translationCancelled: 'Traducción cancelada', fetchError: 'Error de red o punto final de API inaccesible para {service}.', unknownError: 'Ocurrió un error desconocido al usar {service}.', maxTokensError: 'Respuesta de API de {service} truncada debido al límite de tokens. Intente reducir el tamaño del lote o la configuración de tokens máximos.', requestTimeout: 'La solicitud de {service} ha caducado.' },
    it: { apiKeyNotSet: "La chiave API di {service} non è impostata. Impostala nella pagina delle opzioni.", apiEndpointNotSet: "L'endpoint API di {service} non è impostato. Impostalo nella pagina delle opzioni.", jsonParseFailed: "Analisi della risposta JSON da {service} non riuscita.", jsonExtractFailed: "Impossibile estrarre JSON dalla risposta di {service}.", apiLimitReached: 'Limite di richieste API di {service} raggiunto. Riprova più tardi.', unsupportedProvider: "Provider API non supportato selezionato. Controlla la pagina delle opzioni.", translationCancelled: 'Traduzione annullata', fetchError: 'Errore di rete o endpoint API non raggiungibile per {service}.', unknownError: "Si è verificato un errore sconosciuto durante l'utilizzo di {service}.", maxTokensError: 'Risposta API di {service} troncata a causa del limite di token. Prova a ridurre la dimensione del lotto o l\'impostazione dei token massimi.', requestTimeout: 'Richiesta di {service} scaduta.' },
    pt: { apiKeyNotSet: "A chave da API {service} não está definida. Defina-a na página de opções.", apiEndpointNotSet: "O endpoint da API {service} não está definido. Defina-o na página de opções.", jsonParseFailed: "Falha ao analisar a resposta JSON de {service}.", jsonExtractFailed: "Falha ao extrair JSON da resposta {service}.", apiLimitReached: 'Limite de solicitações da API {service} atingido. Tente novamente mais tarde.', unsupportedProvider: "Provedor de API não suportado selecionado. Verifique a página de opções.", translationCancelled: 'Tradução cancelada', fetchError: 'Erro de rede ou endpoint da API inacessível para {service}.', unknownError: "Ocorreu um erro desconhecido ao usar {service}.", maxTokensError: 'Resposta da API {service} truncada devido ao limite de tokens. Tente reduzir o tamanho do lote ou a configuração de tokens máximos.', requestTimeout: 'A solicitação {service} expirou.' },
    ru: { apiKeyNotSet: 'API-ключ {service} не установлен. Пожалуйста, установите его на странице настроек.', apiEndpointNotSet: 'Конечная точка API {service} не установлена. Пожалуйста, установите ее на странице настроек.', jsonParseFailed: 'Не удалось разобрать JSON-ответ от {service}.', jsonExtractFailed: 'Не удалось извлечь JSON из ответа {service}.', apiLimitReached: 'Достигнут предел запросов API {service}. Пожалуйста, попробуйте позже.', unsupportedProvider: 'Выбран неподдерживаемый провайдер API. Пожалуйста, проверьте страницу настроек.', translationCancelled: 'Перевод отменен', fetchError: 'Сетевая ошибка или конечная точка API для {service} недоступна.', unknownError: 'Произошла неизвестная ошибка при использовании {service}.', maxTokensError: 'Ответ API {service} усечен из-за лимита токенов. Попробуйте уменьшить размер пакета или настройку максимальных токенов.', requestTimeout: 'Время ожидания запроса {service} истекло.' },
    'zh-CN': { apiKeyNotSet: '未设置 {service} API 密钥。请在选项页面中设置。', apiEndpointNotSet: '未设置 {service} API 端点。请在选项页面中设置。', jsonParseFailed: '解析来自 {service} 的 JSON 响应失败。', jsonExtractFailed: '无法从 {service} 响应中提取 JSON。', apiLimitReached: '{service} API 请求已达上限。请稍后重试。', unsupportedProvider: '选择了不支持的 API 提供商。请检查选项页面。', translationCancelled: '翻译已取消', fetchError: '{service} 的网络错误或 API 端点无法访问。', unknownError: '使用 {service} 时发生未知错误。', maxTokensError: '由于令牌限制，{service} API 响应被截断。请尝试减小批处理大小或最大令牌设置。', requestTimeout: '{service} 请求超时。' },
    'zh-TW': { apiKeyNotSet: '未設定 {service} API 金鑰。請在選項頁面中設定。', apiEndpointNotSet: '未設定 {service} API 端點。請在選項頁面中設定。', jsonParseFailed: '解析來自 {service} 的 JSON 回應失敗。', jsonExtractFailed: '無法從 {service} 回應中提取 JSON。', apiLimitReached: '{service} API 請求已達上限。請稍後重試。', unsupportedProvider: '選擇了不支援的 API 供應商。請檢查選項頁面。', translationCancelled: '翻譯已取消', fetchError: '{service} 的網路錯誤或 API 端點無法存取。', unknownError: '使用 {service} 時發生未知錯誤。', maxTokensError: '由於權杖限制，{service} API 回應被截斷。請嘗試減小批次大小或最大權杖設定。', requestTimeout: '{service} 請求超時。' },
    ko: { apiKeyNotSet: '{service} API 키가 설정되지 않았습니다. 옵션 페이지에서 설정하십시오.', apiEndpointNotSet: '{service} API 엔드포인트가 설정되지 않았습니다. 옵션 페이지에서 설정하십시오.', jsonParseFailed: '{service}의 JSON 응답 구문 분석 실패.', jsonExtractFailed: '{service} 응답에서 JSON을 추출하지 못했습니다.', apiLimitReached: '{service} API 요청 한도에 도달했습니다. 나중에 다시 시도하십시오.', unsupportedProvider: '지원되지 않는 API 공급자가 선택되었습니다. 옵션 페이지를 확인하십시오.', translationCancelled: '번역이 취소되었습니다', fetchError: '{service}에 대한 네트워크 오류 또는 API 엔드포인트에 연결할 수 없음.', unknownError: '{service}를 사용하는 동안 알 수 없는 오류가 발생했습니다.', maxTokensError: '토큰 제한으로 인해 {service} API 응답이 잘렸습니다. 배치 크기 또는 최대 토큰 설정을 줄여보십시오.', requestTimeout: '{service} 요청 시간이 초과되었습니다.' },
    hi: { apiKeyNotSet: '{service} API कुंजी सेट नहीं है। कृपया इसे विकल्प पृष्ठ में सेट करें।', apiEndpointNotSet: '{service} API एंडपॉइंट सेट नहीं है। कृपया इसे विकल्प पृष्ठ में सेट करें।', jsonParseFailed: '{service} से JSON प्रतिक्रिया का विश्लेषण करने में विफल।', jsonExtractFailed: '{service} प्रतिक्रिया से JSON निकालने में विफल।', apiLimitReached: '{service} API अनुरोध सीमा तक पहुंच गई है। कृपया बाद में पुन: प्रयास करें।', unsupportedProvider: 'असमर्थित API प्रदाता चुना गया। कृपया विकल्प पृष्ठ देखें।', translationCancelled: 'अनुवाद रद्द कर दिया गया', fetchError: '{service} के लिए नेटवर्क त्रुटि या API एंडपॉइंट पहुंच योग्य नहीं है।', unknownError: '{service} का उपयोग करते समय एक अज्ञात त्रुटि हुई।', maxTokensError: 'टोकन सीमा के कारण {service} API प्रतिक्रिया काट दी गई। बैच आकार या अधिकतम टोकन सेटिंग कम करने का प्रयास करें।', requestTimeout: '{service} अनुरोध समय समाप्त हो गया।' },
    ar: { apiKeyNotSet: 'لم يتم تعيين مفتاح API لـ {service}. يرجى تعيينه في صفحة الخيارات.', apiEndpointNotSet: 'لم يتم تعيين نقطة نهاية API لـ {service}. يرجى تعيينها في صفحة الخيارات.', jsonParseFailed: 'فشل تحليل استجابة JSON من {service}.', jsonExtractFailed: 'فشل استخراج JSON من استجابة {service}.', apiLimitReached: 'تم الوصول إلى حد طلبات API لـ {service}. يرجى المحاولة مرة أخرى لاحقًا.', unsupportedProvider: 'تم تحديد مزود API غير مدعوم. يرجى مراجعة صفحة الخيارات.', translationCancelled: 'تم إلغاء الترجمة', fetchError: 'خطأ في الشبكة أو نقطة نهاية API غير قابلة للوصول لـ {service}.', unknownError: 'حدث خطأ غير معروف أثناء استخدام {service}.', maxTokensError: 'تم اقتطاع استجابة واجهة برمجة التطبيقات لـ {service} بسبب حد الرمز المميز. حاول تقليل حجم الدفعة أو إعداد الحد الأقصى للرموز المميزة.', requestTimeout: 'انتهى وقت طلب {service}.' },
    bn: { apiKeyNotSet: '{service} API কী সেট করা নেই। অনুগ্রহ করে বিকল্প পৃষ্ঠায় সেট করুন।', apiEndpointNotSet: '{service} API এন্ডপয়েন্ট সেট করা নেই। অনুগ্রহ করে বিকল্প পৃষ্ঠায় সেট করুন।', jsonParseFailed: '{service} থেকে JSON প্রতিক্রিয়া পার্স করতে ব্যর্থ।', jsonExtractFailed: '{service} প্রতিক্রিয়া থেকে JSON নিষ্কাশন করতে ব্যর্থ।', apiLimitReached: '{service} API অনুরোধের সীমা পৌঁছে গেছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।', unsupportedProvider: 'অসমর্থিত API প্রদানকারী নির্বাচিত হয়েছে। অনুগ্রহ করে বিকল্প পৃষ্ঠাটি পরীক্ষা করুন।', translationCancelled: 'অনুবাদ বাতিল করা হয়েছে', fetchError: '{service} এর জন্য নেটওয়ার্ক ত্রুটি বা API এন্ডপয়েন্ট অ্যাক্সেসযোগ্য নয়।', unknownError: '{service} ব্যবহার করার সময় একটি অজানা ত্রুটি ঘটেছে।', maxTokensError: 'টোকেন সীমার কারণে {service} API প্রতিক্রিয়া কাটা হয়েছে। ব্যাচের আকার বা সর্বোচ্চ টোকেন সেটিং কমানোর চেষ্টা করুন।', requestTimeout: '{service} অনুরোধের সময় শেষ হয়েছে।' },
    id: { apiKeyNotSet: 'Kunci API {service} tidak diatur. Harap atur di halaman opsi.', apiEndpointNotSet: 'Endpoint API {service} tidak diatur. Harap atur di halaman opsi.', jsonParseFailed: 'Gagal mengurai respons JSON dari {service}.', jsonExtractFailed: 'Gagal mengekstrak JSON dari respons {service}.', apiLimitReached: 'Batas permintaan API {service} tercapai. Silakan coba lagi nanti.', unsupportedProvider: 'Penyedia API yang tidak didukung dipilih. Silakan periksa halaman opsi.', translationCancelled: 'Terjemahan dibatalkan', fetchError: 'Kesalahan jaringan atau endpoint API tidak terjangkau untuk {service}.', unknownError: 'Terjadi kesalahan yang tidak diketahui saat menggunakan {service}.', maxTokensError: 'Respons API {service} terpotong karena batas token. Coba kurangi ukuran batch atau pengaturan token maks.', requestTimeout: 'Permintaan {service} habis waktu.' },
    tr: { apiKeyNotSet: '{service} API anahtarı ayarlanmadı. Lütfen seçenekler sayfasında ayarlayın.', apiEndpointNotSet: '{service} API uç noktası ayarlanmadı. Lütfen seçenekler sayfasında ayarlayın.', jsonParseFailed: '{service} kaynağından gelen JSON yanıtı ayrıştırılamadı.', jsonExtractFailed: '{service} yanıtından JSON çıkarılamadı.', apiLimitReached: '{service} API istek sınırına ulaşıldı. Lütfen daha sonra tekrar deneyin.', unsupportedProvider: 'Desteklenmeyen API sağlayıcısı seçildi. Lütfen seçenekler sayfasını kontrol edin.', translationCancelled: 'Çeviri iptal edildi', fetchError: '{service} için ağ hatası veya API uç noktasına ulaşılamıyor.', unknownError: '{service} kullanılırken bilinmeyen bir hata oluştu.', maxTokensError: '{service} API yanıtı jeton sınırı nedeniyle kesildi. Toplu iş boyutunu veya maksimum jeton ayarını azaltmayı deneyin.', requestTimeout: 'İstek zaman aşımına uğradı.' }
};
const contextMenuTranslations = {
    en: "Toggle Translation",
    ja: "翻訳の切り替え",
    fr: "Basculer la traduction",
    de: "Übersetzung umschalten",
    es: "Alternar traducción",
    it: "Attiva/disattiva traduzione",
    pt: "Alternar tradução",
    ru: "Переключить перевод",
    'zh-CN': "切换翻译",
    'zh-TW': "切換翻譯",
    ko: "번역 전환",
    hi: "अनुवाद टॉगल करें",
    ar: "تبديل الترجمة",
    bn: "অনুবাদ টগল করুন",
    id: "Alihkan Terjemahan",
    tr: "Çeviriyi Değiştir"
};

const tabStates = new Map();
const globalRequestQueue = new Map();
let isProcessing = false;
let activeTranslationTabs = new Set();
let unloadTimerId = null;

const BUILTIN_PROVIDER_TEMPLATES = {
    gemini: {
        name: 'Gemini',
        type: 'gemini',
        defaultEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
        defaultModels: ['gemini-flash-lite-latest'],
        apiKeyRequired: true
    },
    openai: {
        name: 'OpenAI',
        type: 'openai',
        defaultEndpoint: 'https://api.openai.com/v1',
        defaultModels: ['gpt-5-nano'],
        apiKeyRequired: true
    },
    deepseek: {
        name: 'DeepSeek',
        type: 'deepseek',
        defaultEndpoint: 'https://api.deepseek.com/v1',
        defaultModels: ['deepseek-chat'],
        apiKeyRequired: true
    },
    anthropic: {
        name: 'Anthropic',
        type: 'anthropic',
        defaultEndpoint: 'https://api.anthropic.com/v1',
        defaultModels: ['claude-sonnet-4-5-20250929'],
        apiKeyRequired: true
    },
    xai: {
        name: 'xAI',
        type: 'xai',
        defaultEndpoint: 'https://api.x.ai/v1',
        defaultModels: ['grok-4-fast-non-reasoning'],
        apiKeyRequired: true
    },
    ollama: {
        name: 'Ollama',
        type: 'ollama',
        defaultEndpoint: 'http://localhost:11434',
        defaultModels: ['llama3'],
        apiKeyRequired: false
    },
    lmstudio: {
        name: 'LM Studio',
        type: 'lmstudio',
        defaultEndpoint: 'http://localhost:1234',
        defaultModels: [''],
        apiKeyRequired: false
    }
};

function parseModels(input) {
    if (Array.isArray(input)) {
        return input.map(value => String(value || '').trim()).filter(Boolean);
    }
    return String(input || '')
        .split(/[\n,]/)
        .map(value => value.trim())
        .filter(Boolean);
}

function normalizeProviderType(type) {
    return BUILTIN_PROVIDER_TEMPLATES[type] ? type : 'openai';
}

function sanitizeProviderId(value) {
    const normalized = String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return normalized || 'provider';
}

function normalizeProviderConfig(config, index = 0) {
    const template = BUILTIN_PROVIDER_TEMPLATES[config?.type] || BUILTIN_PROVIDER_TEMPLATES[config?.id] || BUILTIN_PROVIDER_TEMPLATES.openai;
    const id = sanitizeProviderId(config?.id || config?.name || `${template.type}-${index}`);
    return {
        id,
        name: String(config?.name || template.name || id).trim(),
        type: normalizeProviderType(config?.type || template.type),
        apiKey: String(config?.apiKey || '').trim(),
        endpoint: String(config?.endpoint || template.defaultEndpoint || '').trim(),
        models: parseModels(Array.isArray(config?.models) ? config.models.join('\n') : (config?.models || config?.model || template.defaultModels.join('\n'))),
        unloadAfterTranslation: config?.unloadAfterTranslation === true
    };
}

async function getProviderConfigsFromStorage() {
    const items = await new Promise(resolve => chrome.storage.local.get([
        'providerConfigs',
        'apiProvider',
        'geminiApiKey', 'openaiApiKey', 'deepseekApiKey', 'anthropicApiKey', 'xaiApiKey', 'ollamaApiKey', 'lmstudioApiKey',
        'geminiApiEndpoint', 'openaiApiEndpoint', 'deepseekApiEndpoint', 'anthropicApiEndpoint', 'xaiApiEndpoint', 'ollamaApiEndpoint', 'lmstudioApiEndpoint',
        'geminiModel', 'openaiModel', 'deepseekModel', 'anthropicModel', 'xaiModel', 'ollamaModel', 'lmstudioModel',
        'ollamaUnloadAfterTranslation'
    ], resolve));

    if (Array.isArray(items.providerConfigs)) {
        return items.providerConfigs.map((config, index) => normalizeProviderConfig(config, index));
    }

    return Object.keys(BUILTIN_PROVIDER_TEMPLATES).map((id, index) => {
        const template = BUILTIN_PROVIDER_TEMPLATES[id];
        return normalizeProviderConfig({
            id,
            name: template.name,
            type: template.type,
            apiKey: items[`${id}ApiKey`] || '',
            endpoint: items[`${id}ApiEndpoint`] || template.defaultEndpoint,
            models: items[`${id}Model`] || template.defaultModels.join('\n'),
            unloadAfterTranslation: items.ollamaUnloadAfterTranslation === true && id === 'ollama'
        }, index);
    });
}

async function resolveProviderConfig(providerId) {
    const providerConfigs = await getProviderConfigsFromStorage();
    const normalizedId = sanitizeProviderId(providerId);
    const config = providerConfigs.find(item => item.id === normalizedId);
    if (config) {
        return config;
    }
    return null;
}

function getProviderDisplayName(provider) {
    if (!provider) {
        return 'Provider';
    }
    return provider.name || BUILTIN_PROVIDER_TEMPLATES[provider.type]?.name || provider.type || 'Provider';
}

function getTranslateFunction(providerType) {
    switch (providerType) {
        case 'gemini':
            return translateWithGemini;
        case 'openai':
            return translateWithOpenAI;
        case 'deepseek':
            return translateWithDeepSeek;
        case 'anthropic':
            return translateWithAnthropic;
        case 'xai':
            return translateWithXAI;
        case 'ollama':
            return translateWithOllama;
        case 'lmstudio':
            return translateWithLMStudio;
        default:
            return null;
    }
}

function getModelCandidates(provider, fallbackModel) {
    const models = parseModels(provider?.models);
    if (models.length > 0) {
        return models;
    }
    if (fallbackModel) {
        return [fallbackModel];
    }
    const template = BUILTIN_PROVIDER_TEMPLATES[provider?.type] || BUILTIN_PROVIDER_TEMPLATES.openai;
    return template.defaultModels.filter(Boolean);
}

function isModelMissingError(error, serviceName) {
    const message = String(error?.message || '').toLowerCase();
    if (!message) {
        return false;
    }
    return message.includes('model_not_found') ||
        message.includes('model not found') ||
        message.includes('no such model') ||
        message.includes('model is not found') ||
        message.includes('404') && message.includes('model') ||
        message.includes(getErrorMessage('modelNotFound', 'en').replace('{service}', serviceName).toLowerCase());
}

function resolveEndpoint(provider, fallbackEndpoint) {
    const endpoint = String(provider?.endpoint || '').trim();
    return endpoint || fallbackEndpoint;
}

function getModelApiKey(provider) {
    return String(provider?.apiKey || '').trim();
}

function getTabState(tabId) {
    if (!tabStates.has(tabId)) {
        tabStates.set(tabId, {
            abortController: new AbortController(),
            translationCancelled: false
        });
    }
    const state = tabStates.get(tabId);
    if (state.abortController.signal.aborted) {
        state.abortController = new AbortController();
        state.translationCancelled = false;
    }
    return state;
}

chrome.storage.onChanged.addListener(function(changes, area) {
    if (area === "local") {
        if (changes.targetLanguage) {
            const newLang = changes.targetLanguage.newValue || 'en';
            chrome.contextMenus.update("toggleTranslation", {
                title: contextMenuTranslations[newLang] || contextMenuTranslations.en
            });
        }
    }
});

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install') {
        chrome.runtime.openOptionsPage();
    }
    chrome.storage.local.get(['batchSize', 'maxBatchLength', 'delayBetweenRequests', 'maxToken', 'concurrencyLimit', 'maxRetries', 'timeout', 'ollamaUnloadAfterTranslation'], function(items) {
        if (!items.batchSize) chrome.storage.local.set({ batchSize: 80 });
        if (!items.maxBatchLength) chrome.storage.local.set({ maxBatchLength: 5000 });
        if (!items.delayBetweenRequests) chrome.storage.local.set({ delayBetweenRequests: 2500 });
        if (!items.maxToken) chrome.storage.local.set({ maxToken: 8192 });
        if (!items.concurrencyLimit) chrome.storage.local.set({ concurrencyLimit: 10 });
        if (items.maxRetries === undefined) chrome.storage.local.set({ maxRetries: 3 });
        if (items.timeout === undefined) chrome.storage.local.set({ timeout: 300 });
        if (items.ollamaUnloadAfterTranslation === undefined) chrome.storage.local.set({ ollamaUnloadAfterTranslation: false });
    });
    chrome.storage.local.get(['apiProvider', 'providerConfigs'], function(items) {
        if (!items.apiProvider) chrome.storage.local.set({ apiProvider: 'gemini' });
        if (!Array.isArray(items.providerConfigs)) {
            const providerConfigs = Object.keys(BUILTIN_PROVIDER_TEMPLATES).map((id) => ({
                id,
                name: BUILTIN_PROVIDER_TEMPLATES[id].name,
                type: BUILTIN_PROVIDER_TEMPLATES[id].type,
                apiKey: '',
                endpoint: BUILTIN_PROVIDER_TEMPLATES[id].defaultEndpoint,
                models: BUILTIN_PROVIDER_TEMPLATES[id].defaultModels,
                unloadAfterTranslation: false
            }));
            chrome.storage.local.set({ providerConfigs });
        }
    });
    chrome.storage.local.get(['geminiModel', 'openaiModel', 'deepseekModel', 'anthropicModel', 'xaiModel', 'ollamaModel', 'lmstudioModel'], function(items) {});
    chrome.storage.local.get(['targetLanguage'], function(items) {
        const lang = items.targetLanguage || 'en';
        chrome.contextMenus.create({
            id: "toggleTranslation",
            title: contextMenuTranslations[lang] || contextMenuTranslations.en,
            contexts: ["all"]
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const tabId = sender.tab?.id;
    if (request.action === 'testProvider') {
        (async () => {
            try {
                const provider = normalizeProviderConfig(request.provider || {}, 0);
                const targetLanguage = request.targetLanguage || 'en';
                const translateFunction = getTranslateFunction(provider.type);
                if (!translateFunction) {
                    throw new Error(getErrorMessage('unsupportedProvider', 'en'));
                }
                notifyProviderTestStatus(request.requestId, 'Preparing provider test...', 'info');
                const providerLabel = getProviderDisplayName(provider);
                const models = getModelCandidates(provider, provider.models?.[0] || '');
                notifyProviderTestStatus(
                    request.requestId,
                    `Checking ${providerLabel} with ${models.length > 0 ? models[0] : 'default model'}...`,
                    'info'
                );
                const translated = await translateFunction(
                    'Hello',
                    targetLanguage,
                    0,
                    null,
                    'en',
                    provider
                );
                notifyProviderTestStatus(request.requestId, 'Provider test completed.', 'info');
                sendResponse({
                    success: true,
                    message: `Provider test succeeded. Sample response: ${String(translated || '').slice(0, 80)}`
                });
            } catch (error) {
                notifyProviderTestStatus(request.requestId, error.message || 'Provider test failed.', 'error');
                sendResponse({
                    success: false,
                    error: error.message || 'Provider test failed.'
                });
            }
        })();
        return true;
    }

    if (!tabId) return false;

    if (request.action === "translateBatch") {
        activeTranslationTabs.add(tabId);
        if (unloadTimerId) {
            clearTimeout(unloadTimerId);
            unloadTimerId = null;
        }
        if (!globalRequestQueue.has(tabId)) {
            globalRequestQueue.set(tabId, {
                batches: [],
                state: getTabState(tabId),
                lang: request.lang || 'en'
            });
        }
        globalRequestQueue.get(tabId).batches.push({ request, sendResponse });
        if (!isProcessing) {
            processQueue();
        }
        return true;

    } else if (request.action === "cancelTranslation") {
        const state = getTabState(tabId);
        state.translationCancelled = true;
        state.abortController.abort();
        if (globalRequestQueue.has(tabId)) {
            const tabData = globalRequestQueue.get(tabId);
            const lang = tabData.lang;
            const errorMessage = getErrorMessage('translationCancelled', lang);
            tabData.batches.forEach(({ sendResponse }) => {
                safeSendResponse(sendResponse, { success: false, error: errorMessage });
            });
            globalRequestQueue.delete(tabId);
        }
        if (activeTranslationTabs.has(tabId)) {
            activeTranslationTabs.delete(tabId);
            handlePotentialUnload();
        }
        chrome.tabs.sendMessage(tabId, { action: "translationCancelled" }).catch(err => {
            if (tabStates.has(tabId)) tabStates.delete(tabId);
        });
        return false;

    } else if (request.action === "translationCancelled" || request.action === "translationComplete" || request.action === "translationError") {
        if (activeTranslationTabs.has(tabId)) {
            activeTranslationTabs.delete(tabId);
            handlePotentialUnload();
        }
        return false;
    }
    return false;
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "toggleTranslation" && tab?.id) {
        chrome.tabs.sendMessage(tab.id, { action: "toggleTranslation" }).catch(err => {});
    }
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    if (tabStates.has(tabId)) {
        const state = tabStates.get(tabId);
        if (!state.abortController.signal.aborted) {
            state.abortController.abort();
        }
        tabStates.delete(tabId);
    }
    if (globalRequestQueue.has(tabId)) {
        globalRequestQueue.delete(tabId);
    }
    if (activeTranslationTabs.has(tabId)) {
        activeTranslationTabs.delete(tabId);
        handlePotentialUnload();
    }
});

async function processQueue() {
    if (isProcessing || globalRequestQueue.size === 0) {
        return;
    }
    isProcessing = true;

    const tabId = globalRequestQueue.keys().next().value;
    const tabData = globalRequestQueue.get(tabId);

    await processTab(tabId, tabData);

    globalRequestQueue.delete(tabId);
    handlePotentialUnload();

    if (globalRequestQueue.size > 0) {
        const { delayBetweenRequests } = await new Promise(resolve => chrome.storage.local.get(['delayBetweenRequests'], resolve));
        const waitTime = (delayBetweenRequests || 2500) + 5000;
        await sleep(waitTime, null); // No signal here, we want to wait regardless
        isProcessing = false;
        processQueue();
    } else {
        isProcessing = false;
    }
}

async function processTab(tabId, tabData) {
    const { batches, state, lang } = tabData;
    const { concurrencyLimit, delayBetweenRequests } = await new Promise(resolve => chrome.storage.local.get(['concurrencyLimit', 'delayBetweenRequests'], resolve));
    
    let activeRequests = 0;
    let batchIndex = 0;

    return new Promise(resolve => {
        const processNextBatch = () => {
            if (state.translationCancelled || state.abortController.signal.aborted) {
                 if(activeRequests === 0) resolve();
                 return;
            }
            while(batchIndex < batches.length && activeRequests < (concurrencyLimit || 10)) {
                const { request, sendResponse } = batches[batchIndex];
                batchIndex++;
                activeRequests++;
                (async () => {
                    try {
                        if (delayBetweenRequests > 0 && activeRequests > 1) {
                            await sleep(delayBetweenRequests, state.abortController.signal);
                        }
                        if (state.abortController.signal.aborted) throw createAbortError(lang);
                        const translations = await translateTextBatch(request.batch, request.targetLanguage, request.apiProvider, state.abortController.signal, lang);
                        safeSendResponse(sendResponse, { success: true, translations });
                    } catch(error) {
                        safeSendResponse(sendResponse, { success: false, error: error.message || getErrorMessage('unknownError', lang) });
                    } finally {
                        activeRequests--;
                        if (batchIndex >= batches.length && activeRequests === 0) {
                            resolve();
                        } else {
                            processNextBatch();
                        }
                    }
                })();
            }
        }
        processNextBatch();
    });
}

function safeSendResponse(sendResponse, responseData) {
    try {
        if (sendResponse) sendResponse(responseData);
    } catch (e) {}
}

async function handlePotentialUnload() {
    if (unloadTimerId) {
        clearTimeout(unloadTimerId);
        unloadTimerId = null;
    }
    if (activeTranslationTabs.size > 0 || globalRequestQueue.size > 0 || isProcessing) return;
    const items = await new Promise(resolve => chrome.storage.local.get(['apiProvider', 'ollamaUnloadAfterTranslation'], resolve));
    const provider = await resolveProviderConfig(items.apiProvider);
    if (provider?.type === 'ollama' && (provider.unloadAfterTranslation || items.ollamaUnloadAfterTranslation)) {
        const unloadDelay = 5000;
        unloadTimerId = setTimeout(async () => {
            if (activeTranslationTabs.size > 0 || globalRequestQueue.size > 0 || isProcessing) {
                unloadTimerId = null;
                return;
            }
            const endpointUrl = `${provider.endpoint.replace(/\/$/, '')}/api/chat`;
            const headers = { 'Content-Type': 'application/json' };
            if (provider.apiKey) headers['Authorization'] = `Bearer ${provider.apiKey}`;
            const requestBody = JSON.stringify({
                model: provider.models?.[0] || '',
                messages: [{ role: "user", content: "." }],
                keep_alive: "0s",
                stream: false
            });
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                await fetch(endpointUrl, {
                    method: 'POST',
                    headers: headers,
                    body: requestBody,
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
            } catch (error) {} finally {
                unloadTimerId = null;
            }
        }, unloadDelay);
    }
}

function getErrorMessage(key, lang = 'en') {
    return (errorTranslations[lang] || errorTranslations.en)[key] || errorTranslations.en.unknownError;
}

function notifyProviderTestStatus(requestId, message, type = 'info') {
    if (!requestId) {
        return;
    }
    chrome.runtime.sendMessage({
        action: 'testProviderStatus',
        requestId,
        message,
        type
    }).catch(() => {});
}

function createAbortError(lang = 'en') {
    const error = new Error(getErrorMessage('translationCancelled', lang));
    error.name = 'AbortError';
    return error;
}

function sleep(ms, signal) {
    return new Promise((resolve, reject) => {
        if (signal?.aborted) return reject(createAbortError());
        const timeoutId = setTimeout(resolve, ms);
        if (signal) {
            signal.addEventListener('abort', () => {
                clearTimeout(timeoutId);
                reject(createAbortError());
            }, { once: true });
        }
    });
}

async function fetchWithTimeout(resource, options = {}, timeout, lang = 'en') {
    const controller = new AbortController();
    const timeoutId = timeout > 0 ? setTimeout(() => controller.abort(), timeout * 1000) : null;

    options.signal = combineSignals(options.signal, controller.signal);

    try {
        const response = await fetch(resource, options);
        if (timeoutId) clearTimeout(timeoutId);
        return response;
    } catch (error) {
        if (timeoutId) clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            if (options.signal?.aborted && !controller.signal.aborted) {
                throw createAbortError(lang);
            } else {
                throw new Error(getErrorMessage('requestTimeout', lang));
            }
        }
        throw new Error(`${getErrorMessage('fetchError', lang)}: ${error.message}`);
    }
}

function combineSignals(...signals) {
    const controller = new AbortController();
    const onAbort = () => {
        controller.abort();
        signals.forEach(signal => signal?.removeEventListener('abort', onAbort));
    };
    for (const signal of signals.filter(s => s)) {
        if (signal.aborted) {
            controller.abort();
            break;
        }
        signal.addEventListener('abort', onAbort, { once: true });
    }
    return controller.signal;
}

function getLanguageName(langCode) {
    const languageNames = { en: 'English', ja: '日本語', fr: 'Français', de: 'Deutsch', es: 'Español', it: 'Italiano', pt: 'Português', ru: 'Русский', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ko: '한국어', hi: 'हिन्दी', ar: 'العربية', bn: 'বাংলা', id: 'Bahasa Indonesia', tr: 'Türkçe' };
    return languageNames[langCode] || langCode;
}

async function translateTextBatch(fragmentBatch, targetLanguage, apiProvider, signal, lang) {
    if (signal?.aborted) throw createAbortError(lang);
    if (!fragmentBatch || fragmentBatch.length === 0) return [];

    const { maxRetries } = await new Promise(resolve => chrome.storage.local.get(['maxRetries'], resolve));
    const provider = await resolveProviderConfig(apiProvider);
    if (!provider) {
        throw new Error(getErrorMessage('unsupportedProvider', lang));
    }
    const translateFunction = getTranslateFunction(provider.type);
    if (!translateFunction) {
        throw new Error(getErrorMessage('unsupportedProvider', lang));
    }

    const markers = [];
    let combinedText = '';
    fragmentBatch.forEach((frag, index) => {
        const marker = `[F_${index}]`;
        combinedText += marker + frag.text;
        markers.push({ id: frag.id, originalIndex: index });
    });

    const translatedTextWithMarkers = await translateFunction(
        combinedText,
        targetLanguage,
        maxRetries !== undefined ? maxRetries : 3,
        signal,
        lang,
        provider
    );

    const foundTranslations = new Map();
    const markerRegex = /\[\s*F_(\d+)\s*\]/g;

    const matches = [...translatedTextWithMarkers.matchAll(markerRegex)];

    if (matches.length > 0) {
        for (let i = 0; i < matches.length; i++) {
            const currentMatch = matches[i];
            const nextMatch = matches[i + 1];
            const fragmentIndex = parseInt(currentMatch[1], 10);
            const startIndex = currentMatch.index + currentMatch[0].length;
            const endIndex = nextMatch ? nextMatch.index : translatedTextWithMarkers.length;
            const text = translatedTextWithMarkers.substring(startIndex, endIndex).trim();
            const originalMarkerInfo = markers.find(m => m.originalIndex === fragmentIndex);
            if (originalMarkerInfo) {
                if (!foundTranslations.has(originalMarkerInfo.id)) {
                    foundTranslations.set(originalMarkerInfo.id, text);
                }
            }
        }
    }

    const translations = fragmentBatch.map(fragment => {
        return {
            id: fragment.id,
            translation: foundTranslations.get(fragment.id) || "",
            tag: fragment.tag
        };
    });

    return translations;
}


async function performTranslation(apiCall, retryLimit, signal, lang) {
    let lastError = null;
    for (let i = 0; i <= retryLimit; i++) {
        if (signal?.aborted) throw createAbortError(lang);
        try {
            return await apiCall();
        } catch (error) {
            lastError = error;
            if (error.message.includes(getErrorMessage('apiLimitReached', lang)) ||
                (error.message && error.message.includes('HTTP Error 4')) ||
                error.message.includes(getErrorMessage('requestTimeout', lang)) ||
                error.message.includes('MAX_TOKENS')) {
                break;
            }
            if (i < retryLimit) {
                await sleep(Math.pow(2, i) * 1000 + Math.random() * 1000, signal);
            }
        }
    }
    throw lastError;
}

function createTranslationPrompt(text, targetLanguage) {
    return `You are a highly precise translation engine. Your task is to translate text segments from English to ${getLanguageName(targetLanguage)}.

**CRITICAL RULES (Follow these without exception):**

1.  **INPUT FORMAT:** The input text contains segments marked with identifiers like [F_0], [F_1], [F_2], etc.
    *Example Input:* \`[F_0]The quick brown fox [F_1]jumps over [F_2]the lazy dog.\`

2.  **OUTPUT FORMAT:** Your output MUST be a single string that contains the EXACT same markers as the input, in the same order.
    *Correct Output (for Japanese):* \`[F_0]素早い茶色のキツネは[F_1]怠惰な犬を[F_2]飛び越えます。\`

3.  **DO NOT OMIT MARKERS:** You must not omit, delete, or forget any markers from the original input. The number of markers in your output must be identical to the input.

4.  **TRANSLATE SEGMENTS ONLY:** Translate ONLY the text immediately following each marker. Treat each segment as an independent piece of text.
    *   In \`[F_0]The quick brown fox\`, only translate "The quick brown fox".
    *   In \`[F_1]jumps over\`, only translate "jumps over".

5.  **NO MERGING:** Do NOT merge or combine segments. The translation for \`[F_0]\` and \`[F_1]\` must remain separate, divided by the \`[F_1]\` marker.

6.  **TRANSLATE EVERYTHING:** Translate ALL words within each segment, including articles like "a", "an", and "the".

**Your task is to translate the following text strictly according to these rules:**
${text}`;
}

async function translateWithGemini(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    if (!apiKey) throw new Error(getErrorMessage('apiKeyNotSet', lang).replace('{service}', serviceName));

    const endpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.gemini.defaultEndpoint);
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.gemini.defaultModels[0]);
    let lastError = null;

    for (const actualModel of models) {
        try {
            const prompt = createTranslationPrompt(text, targetLanguage);
            const requestBody = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.2, maxOutputTokens: maxToken || 8192 }
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${endpoint.replace(/\/$/, '')}/${actualModel}:generateContent?key=${apiKey}`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    switch (response.status) {
                        case 400:
                            if (message.includes('API key not valid')) {
                                throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                            }
                            throw new Error(getErrorMessage('invalidRequest', lang).replace('{service}', serviceName) + `\n${message}`);
                        case 403:
                            throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                        case 404:
                            throw new Error(getErrorMessage('modelNotFound', lang).replace('{service}', serviceName));
                        case 429:
                            throw new Error(getErrorMessage('apiLimitReached', lang).replace('{service}', serviceName));
                        case 500:
                        case 503:
                            throw new Error(getErrorMessage('serverError', lang).replace('{service}', serviceName));
                        default:
                            throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                    }
                }
                const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (data.candidates?.[0]?.finishReason === 'MAX_TOKENS') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from Gemini API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithOpenAI(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    if (!apiKey) throw new Error(getErrorMessage('apiKeyNotSet', lang).replace('{service}', serviceName));

    const endpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.openai.defaultEndpoint);
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.openai.defaultModels[0]);
    let lastError = null;

    for (const actualModel of models) {
        try {
            const prompt = createTranslationPrompt(text, targetLanguage);
            const requestBody = {
                model: actualModel,
                messages: [{ role: 'user', content: prompt }],
                temperature: 1,
                max_completion_tokens: maxToken || 8192
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${endpoint.replace(/\/$/, '')}/chat/completions`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` }, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    switch (response.status) {
                        case 401:
                            throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                        case 429:
                            if (message.includes('quota')) {
                                throw new Error(getErrorMessage('insufficientQuota', lang).replace('{service}', serviceName));
                            }
                            throw new Error(getErrorMessage('apiLimitReached', lang).replace('{service}', serviceName));
                        case 500:
                        case 503:
                            throw new Error(getErrorMessage('serverError', lang).replace('{service}', serviceName));
                        default:
                            if (message.includes('model_not_found')) {
                                throw new Error(getErrorMessage('modelNotFound', lang).replace('{service}', serviceName));
                            }
                            throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                    }
                }
                const responseText = data.choices?.[0]?.message?.content;
                if (data.choices?.[0]?.finish_reason === 'length') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from OpenAI API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithDeepSeek(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    if (!apiKey) throw new Error(getErrorMessage('apiKeyNotSet', lang).replace('{service}', serviceName));

    const endpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.deepseek.defaultEndpoint);
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.deepseek.defaultModels[0]);
    let lastError = null;

    for (const actualModel of models) {
        try {
            const prompt = createTranslationPrompt(text, targetLanguage);
            const requestBody = {
                model: actualModel,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.2,
                max_tokens: maxToken || 8192
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${endpoint.replace(/\/$/, '')}/chat/completions`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` }, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    switch (response.status) {
                        case 401:
                            throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                        case 402:
                            throw new Error(getErrorMessage('insufficientQuota', lang).replace('{service}', serviceName));
                        case 429:
                            throw new Error(getErrorMessage('apiLimitReached', lang).replace('{service}', serviceName));
                        case 500:
                        case 503:
                            throw new Error(getErrorMessage('serverError', lang).replace('{service}', serviceName));
                        default:
                            throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                    }
                }
                const responseText = data.choices?.[0]?.message?.content;
                if (data.choices?.[0]?.finish_reason === 'length') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from DeepSeek API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithAnthropic(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    if (!apiKey) throw new Error(getErrorMessage('apiKeyNotSet', lang).replace('{service}', serviceName));

    const endpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.anthropic.defaultEndpoint);
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.anthropic.defaultModels[0]);
    let lastError = null;

    for (const actualModel of models) {
        try {
            const systemPrompt = `You are a professional translator. Your task is to translate the given text into ${getLanguageName(targetLanguage)}. The text contains special markers like [F_0], [F_1], etc. You MUST preserve these markers exactly as they are and in their correct relative positions in the translated text.`;
            const userPrompt = `Translate the following text, keeping the markers like [F_0] in place:\n${text}`;
            const requestBody = {
                model: actualModel,
                system: systemPrompt,
                messages: [{ role: 'user', content: userPrompt }],
                max_tokens: maxToken || 8192,
                temperature: 0.2
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${endpoint.replace(/\/$/, '')}/messages`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    switch (response.status) {
                        case 401:
                        case 403:
                            throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                        case 429:
                            throw new Error(getErrorMessage('apiLimitReached', lang).replace('{service}', serviceName));
                        case 500:
                        case 529:
                            throw new Error(getErrorMessage('serverError', lang).replace('{service}', serviceName));
                        default:
                            throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                    }
                }
                const responseText = data.content?.[0]?.text;
                if (data.stop_reason === 'max_tokens') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from Anthropic API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithXAI(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    if (!apiKey) throw new Error(getErrorMessage('apiKeyNotSet', lang).replace('{service}', serviceName));

    const endpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.xai.defaultEndpoint);
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.xai.defaultModels[0]);
    let lastError = null;

    for (const actualModel of models) {
        try {
            const prompt = createTranslationPrompt(text, targetLanguage);
            const requestBody = {
                model: actualModel,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.2,
                max_tokens: maxToken || 8192
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${endpoint.replace(/\/$/, '')}/chat/completions`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` }, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    switch (response.status) {
                        case 401:
                        case 403:
                            throw new Error(getErrorMessage('invalidApiKey', lang).replace('{service}', serviceName));
                        case 404:
                            throw new Error(getErrorMessage('modelNotFound', lang).replace('{service}', serviceName));
                        case 429:
                            throw new Error(getErrorMessage('apiLimitReached', lang).replace('{service}', serviceName));
                        case 500:
                        case 503:
                            throw new Error(getErrorMessage('serverError', lang).replace('{service}', serviceName));
                        default:
                            throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                    }
                }
                const responseText = data.choices?.[0]?.message?.content;
                if (data.choices?.[0]?.finish_reason === 'length') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from xAI API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithOllama(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    const apiEndpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.ollama.defaultEndpoint);
    if (!apiEndpoint) throw new Error(getErrorMessage('apiEndpointNotSet', lang).replace('{service}', serviceName));
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.ollama.defaultModels[0]);
    const prompt = createTranslationPrompt(text, targetLanguage);
    const headers = { 'Content-Type': 'application/json' };
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;
    let lastError = null;

    for (const actualModel of models) {
        try {
            const requestBody = {
                model: actualModel || 'llama3',
                messages: [{ role: 'user', content: prompt }],
                stream: false,
                options: { temperature: 0.2, num_ctx: maxToken || 8192 }
            };
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${apiEndpoint.replace(/\/$/, '')}/api/chat`, {
                    method: 'POST', headers, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error || `HTTP Error ${response.status}`;
                    if (String(message).includes('model not found')) {
                        throw new Error(getErrorMessage('modelNotFound', lang).replace('{service}', serviceName));
                    }
                    throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                }
                const responseText = data.message?.content;
                if (data?.done_reason === 'length') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from Ollama API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}

async function translateWithLMStudio(text, targetLanguage, retryLimit, signal, lang, provider) {
    const serviceName = getProviderDisplayName(provider);
    const { maxToken, timeout } = await new Promise(resolve => chrome.storage.local.get(['maxToken', 'timeout'], resolve));
    const apiKey = getModelApiKey(provider);
    const apiEndpoint = resolveEndpoint(provider, BUILTIN_PROVIDER_TEMPLATES.lmstudio.defaultEndpoint);
    if (!apiEndpoint) throw new Error(getErrorMessage('apiEndpointNotSet', lang).replace('{service}', serviceName));
    const models = getModelCandidates(provider, BUILTIN_PROVIDER_TEMPLATES.lmstudio.defaultModels[0]);
    const prompt = createTranslationPrompt(text, targetLanguage);
    const headers = { 'Content-Type': 'application/json' };
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;
    let lastError = null;

    for (const actualModel of models) {
        try {
            const requestBody = {
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.2,
                max_tokens: maxToken > 0 ? maxToken : -1
            };
            if (actualModel) requestBody.model = actualModel;
            return await performTranslation(async () => {
                const response = await fetchWithTimeout(`${apiEndpoint.replace(/\/$/, '')}/v1/chat/completions`, {
                    method: 'POST', headers, body: JSON.stringify(requestBody), signal
                }, timeout || 300, lang);
                const data = await response.json();
                if (!response.ok) {
                    const message = data?.error?.message || `HTTP Error ${response.status}`;
                    if (message.includes('model_not_found')) {
                        throw new Error(getErrorMessage('modelNotFound', lang).replace('{service}', serviceName));
                    }
                    throw new Error(getErrorMessage('unknownError', lang).replace('{service}', serviceName) + `\n${message}`);
                }
                const responseText = data.choices?.[0]?.message?.content;
                if (data.choices?.[0]?.finish_reason === 'length') throw new Error(getErrorMessage('maxTokensError', lang).replace('{service}', serviceName));
                if (!responseText) throw new Error('Invalid response structure from LM Studio API.');
                return responseText;
            }, retryLimit, signal, lang);
        } catch (error) {
            lastError = error;
            if (!isModelMissingError(error, serviceName)) {
                throw error;
            }
        }
    }

    throw lastError;
}
