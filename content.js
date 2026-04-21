(function() {
    const promptMessages = {
        ja: 'このページを翻訳しますか？',
        en: 'Do you want to translate this page?',
        fr: 'Voulez-vous traduire cette page ?',
        de: 'Möchten Sie diese Seite übersetzen?',
        es: '¿Desea traducir esta página?',
        it: 'Vuoi tradurre questa pagina?',
        pt: 'Deseja traduzir esta página?',
        ru: 'Перевести эту страницу?',
        'zh-CN': '要翻译此页面吗？',
        'zh-TW': '是否翻譯此頁面？',
        ko: '이 페이지를 번역하시겠습니까?',
        hi: 'क्या आप इस पेज का अनुवाद करना चाहते हैं?',
        ar: 'هل تريد ترجمة هذه الصفحة؟',
        bn: 'আপনি কি এই পৃষ্ঠাটি অনুবাদ করতে চান?',
        id: 'Apakah Anda ingin menerjemahkan halaman ini?',
        tr: 'Bu sayfayı çevirmek ister misiniz?'
    };
    const translateButtonTexts = {
        ja: { yes: '翻訳', no: 'いいえ', never: 'このサイトでは表示しない' },
        en: { yes: 'Translate', no: 'No', never: 'Don\'t show for this site' },
        fr: { yes: 'Traduire', no: 'Non', never: 'Ne pas afficher ce site' },
        de: { yes: 'Übersetzen', no: 'Nein', never: 'Diese Seite nicht anzeigen' },
        es: { yes: 'Traducir', no: 'No', never: 'No mostrar este sitio' },
        it: { yes: 'Traduci', no: 'No', never: 'Non mostrare questo sito' },
        pt: { yes: 'Traduzir', no: 'Não', never: 'Não mostrar para este site' },
        ru: { yes: 'Перевести', no: 'Нет', never: 'Не показывать для этого сайта' },
        'zh-CN': { yes: '翻译', no: '不', never: '不在此网站显示' },
        'zh-TW': { yes: '翻譯', no: '否', never: '在此網站上不再顯示' },
        ko: { yes: '번역', no: '아니오', never: '이 사이트는 표시하지 않음' },
        hi: { yes: 'अनुवाद करें', no: 'नहीं', never: 'इस साइट के लिए न दिखाएं' },
        ar: { yes: 'ترجمة', no: 'لا', never: 'لا تعرض لهذا الموقع' },
        bn: { yes: 'অনুবাদ করুন', no: 'না', never: 'এই সাইটের জন্য দেখাবেন না' },
        id: { yes: 'Terjemahkan', no: 'Tidak', never: 'Jangan tampilkan untuk situs ini' },
        tr: { yes: 'Çevir', no: 'Hayır', never: 'Bu site için gösterme' }
    };
    const translateAllButtonTexts = {
        ja: '全文翻訳',
        en: 'Translate All',
        fr: 'Tout traduire',
        de: 'Alles übersetzen',
        es: 'Traducir todo',
        it: 'Traduci tutto',
        pt: 'Traduzir tudo',
        ru: 'Перевести все',
        'zh-CN': '全文翻译',
        'zh-TW': '全文翻譯',
        ko: '전체 번역',
        hi: 'सभी का अनुवाद',
        ar: 'ترجمة الكل',
        bn: 'সব অনুবাদ',
        id: 'Terjemahkan semua',
        tr: 'Hepsini çevir'
    };
    const builtInProviderNames = {
        gemini: 'Gemini',
        openai: 'OpenAI',
        deepseek: 'DeepSeek',
        anthropic: 'Anthropic',
        xai: 'xAI',
        ollama: 'Ollama',
        lmstudio: 'LM Studio'
    };
    const statusTranslations = {
        en: { translating: 'Translating...', cancelling: 'Cancelling...', translationCancelled: 'Translation cancelled.', noTextFound: 'No text found to translate', translationCompleted: 'Translation completed', errorOccurred: 'An error occurred', apiLimitError: 'API request limit reached. Please try again later, or adjust settings.', progressTemplate: 'Batches: {currentBatch}/{totalBatch}, Fragments: {translatedFragments}/{expected}', closeButton: 'Close', cancelButton: 'Cancel', openOptions: 'Open Options' },
        ja: { translating: '翻訳中...', cancelling: '停止処理中...', translationCancelled: '翻訳を中止しました。', noTextFound: '翻訳するテキストが見つかりませんでした', translationCompleted: '翻訳が完了しました', errorOccurred: 'エラーが発生しました', apiLimitError: 'APIリクエスト制限に達しました。しばらく待つか、設定を調整してください。', progressTemplate: 'バッチ: {currentBatch}/{totalBatch}, テキスト断片: {translatedFragments}/{expected}', closeButton: '閉じる', cancelButton: '中止', openOptions: 'オプションを開く' },
        fr: { translating: 'Traduction en cours...', cancelling: 'Annulation...', translationCancelled: 'Traduction annulée.', noTextFound: 'Aucun texte à traduire', translationCompleted: 'Traduction terminée', errorOccurred: 'Une erreur s\'est produite', apiLimitError: 'Limite de requêtes API atteinte. Veuillez réessayer plus tard ou ajuster les paramètres.', progressTemplate: 'Lots : {currentBatch}/{totalBatch}, Fragments : {translatedFragments}/{expected}', closeButton: 'Fermer', cancelButton: 'Annuler' },
        de: { translating: 'Übersetzen...', cancelling: 'Abbrechen...', translationCancelled: 'Übersetzung abgebrochen.', noTextFound: 'Kein zu übersetzender Text gefunden', translationCompleted: 'Übersetzung abgeschlossen', errorOccurred: 'Ein Fehler ist aufgetreten', apiLimitError: 'API-Anfragelimit erreicht. Bitte versuchen Sie es später erneut oder passen Sie die Einstellungen an.', progressTemplate: 'Stapel: {currentBatch}/{totalBatch}, Fragmente: {translatedFragments}/{expected}', closeButton: 'Schließen', cancelButton: 'Abbrechen' },
        es: { translating: 'Traduciendo...', cancelling: 'Cancelando...', translationCancelled: 'Traducción cancelada.', noTextFound: 'No se encontró texto para traducir', translationCompleted: 'Traducción completada', errorOccurred: 'Ocurrió un error', apiLimitError: 'Se ha alcanzado el límite de solicitudes API. Inténtelo de nuevo más tarde o ajuste la configuración.', progressTemplate: 'Lotes: {currentBatch}/{totalBatch}, Fragmentos: {translatedFragments}/{expected}', closeButton: 'Cerrar', cancelButton: 'Cancelar' },
        it: { translating: 'Traducendo...', cancelling: 'Annullamento...', translationCancelled: 'Traduzione annullata.', noTextFound: 'Nessun testo da tradurre trovato', translationCompleted: 'Traduzione completata', errorOccurred: 'Si è verificato un errore', apiLimitError: 'Limite di richieste API raggiunto. Riprova più tardi o modifica le impostazioni.', progressTemplate: 'Blocchi: {currentBatch}/{totalBatch}, Frammenti: {translatedFragments}/{expected}', closeButton: 'Chiudi', cancelButton: 'Annulla' },
        pt: { translating: 'Traduzindo...', cancelling: 'Cancelando...', translationCancelled: 'Tradução cancelada.', noTextFound: 'Nenhum texto encontrado para traduzir', translationCompleted: 'Tradução concluída', errorOccurred: 'Ocorreu um erro', apiLimitError: 'Limite de solicitações API atingido. Tente novamente mais tarde ou ajuste as configurações.', progressTemplate: 'Lotes: {currentBatch}/{totalBatch}, Fragmentos: {translatedFragments}/{expected}', closeButton: 'Fechar', cancelButton: 'Cancelar' },
        ru: { translating: 'Перевод...', cancelling: 'Отмена...', translationCancelled: 'Перевод отменен.', noTextFound: 'Не найдено текста для перевода', translationCompleted: 'Перевод завершен', errorOccurred: 'Произошла ошибка', apiLimitError: 'Достигнут предел запросов API. Попробуйте позже или измените настройки.', progressTemplate: 'Пакеты: {currentBatch}/{totalBatch}, Фрагменты: {translatedFragments}/{expected}', closeButton: 'Закрыть', cancelButton: 'Отмена' },
        'zh-CN': { translating: '正在翻译...', cancelling: '正在取消...', translationCancelled: '翻译已取消。', noTextFound: '没有可翻译的文本', translationCompleted: '翻译完成', errorOccurred: '发生错误', apiLimitError: '已达到 API 请求限制。请稍后重试或调整设置。', progressTemplate: '批次: {currentBatch}/{totalBatch}, 片段: {translatedFragments}/{expected}', closeButton: '关闭', cancelButton: '取消' },
        'zh-TW': { translating: '正在翻譯...', cancelling: '正在取消...', translationCancelled: '翻譯已取消。', noTextFound: '沒有可翻譯的文字', translationCompleted: '翻譯完成', errorOccurred: '發生錯誤', apiLimitError: '已達到 API 请求限制。請稍後重試或調整設定。', progressTemplate: '批次: {currentBatch}/{totalBatch}, 片段: {translatedFragments}/{expected}', closeButton: '關閉', cancelButton: '取消' },
        ko: { translating: '번역 중...', cancelling: '취소 중...', translationCancelled: '번역이 취소되었습니다.', noTextFound: '번역할 텍스트가 없습니다', translationCompleted: '번역이 완료되었습니다', errorOccurred: '오류가 발생했습니다', apiLimitError: 'API 요청 한도에 도달했습니다. 나중에 다시 시도하거나 설정을 조정하세요.', progressTemplate: '배치: {currentBatch}/{totalBatch}, 조각: {translatedFragments}/{expected}', closeButton: '닫기', cancelButton: '취소' },
        hi: { translating: 'अनुवाद चल रहा है...', cancelling: 'रद्द किया जा रहा है...', translationCancelled: 'अनुवाद रद्द कर दिया गया।', noTextFound: 'अनुवाद करने के लिए कोई पाठ नहीं मिला', translationCompleted: 'अनुवाद पूरा हुआ', errorOccurred: 'एक त्रुटि हुई', apiLimitError: 'API अनुरोध सीमा तक पहुँच गई है। कृपया बाद में पुन: प्रयास करें, या सेटिंग्स समायोजित करें।', progressTemplate: 'बैच: {currentBatch}/{totalBatch}, खंड: {translatedFragments}/{expected}', closeButton: 'बंद करें', cancelButton: 'रद्द करें' },
        ar: { translating: 'جارٍ الترجمة...', cancelling: 'جارٍ الإلغاء...', translationCancelled: 'تم إلغاء الترجمة.', noTextFound: 'لم يتم العثور على نص للترجمة', translationCompleted: 'اكتملت الترجمة', errorOccurred: 'حدث خطأ', apiLimitError: 'تم الوصول إلى حد طلبات API. يرجى المحاولة مرة أخرى لاحقًا، أو ضبط الإعدادات.', progressTemplate: 'الدفعة: {currentBatch}/{totalBatch}, الأجزاء: {translatedFragments}/{expected}', closeButton: 'إغلاق', cancelButton: 'إلغاء' },
        bn: { translating: 'অনুবাদ চলছে...', cancelling: 'বাতিল করা হচ্ছে...', translationCancelled: 'অনুবাদ বাতিল করা হয়েছে।', noTextFound: 'অনুবাদ করার জন্য কোনও টেক্সট পাওয়া যায়নি', translationCompleted: 'অনুবাদ সম্পন্ন হয়েছে', errorOccurred: 'একটি ত্রুটি ঘটেছে', apiLimitError: 'API অনুরোধ সীমায় পৌঁছে গেছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন, অথবা সেটিংস সামঞ্জস্য করুন।', progressTemplate: 'ব্যাচ: {currentBatch}/{totalBatch}, খণ্ড: {translatedFragments}/{expected}', closeButton: 'বন্ধ করুন', cancelButton: 'বাতিল করুন' },
        id: { translating: 'Menerjemahkan...', cancelling: 'Membatalkan...', translationCancelled: 'Terjemahan dibatalkan.', noTextFound: 'Tidak ada teks yang ditemukan untuk diterjemahkan', translationCompleted: 'Penerjemahan selesai', errorOccurred: 'Terjadi kesalahan', apiLimitError: 'Batas permintaan API tercapai. Silakan coba lagi nanti, atau sesuaikan pengaturan.', progressTemplate: 'Batch: {currentBatch}/{totalBatch}, Fragmen: {translatedFragments}/{expected}', closeButton: 'Tutup', cancelButton: 'Batal' },
        tr: { translating: 'Çevriliyor...', cancelling: 'İptal ediliyor...', translationCancelled: 'Çeviri iptal edildi.', noTextFound: 'Çevrilecek metin bulunamadı', translationCompleted: 'Çeviri tamamlandı', errorOccurred: 'Bir hata oluştu', apiLimitError: 'API istek sınırı aşıldı. Lütfen daha sonra tekrar deneyin veya ayarları düzenleyin.', progressTemplate: 'Toplu: {currentBatch}/{totalBatch}, Parçalar: {translatedFragments}/{expected}', closeButton: 'Kapat', cancelButton: 'İptal' }
    };

    let isTranslating = false;
    let translationStarted = false;
    let translationCancelled = false;
    let translationHasError = false;
    let translationProgress = 0;
    let translatedFragmentsCount = 0;
    let totalBatches = 0;
    let batchesProcessed = 0;
    let expectedTotalFragments = 0;
    let activeTranslationMode = 'visible';
    let pendingTranslationModeAfterCancel = null;
    let viewportScrollTimer = null;
    let viewportTranslationQueued = false;
    let viewportListenersInstalled = false;

    let textNodeInfos = new WeakMap();
    let activeObservers = [];
    let observerDebounceTimer = null;
    let progressInterval = null;
    let statusContainer = null;
    let statusShadowRoot = null;
    let promptContainer = null;
    let promptShadowRoot = null;
    let minimizedDiv = null;
    let fragmentNodeMap = new Map();
    let domUpdateQueue = [];
    let isApplyingUpdates = false;
    let providerEntries = [];
    let activeProviderId = '';

    const observerConfig = { childList: true, subtree: true };

    function initTranslation() {
        try {
            chrome.storage.local.get(['targetLanguage', 'realTimeTranslation', 'excludeList', 'whitelist', 'apiProvider', 'hidePromptAllSites'], function(items) {
                // Initial setup happens as soon as possible.
                try {
                    initializeTextNodeMap();
                    watchForNewText();
                    installViewportTranslationListeners();
                } catch (initError) {}

                const pageLang = getPageLanguage();
                const chosenLang = items.targetLanguage || 'en';
                const pageLangPrimary = pageLang ? pageLang.split('-')[0].toLowerCase() : null;
                const chosenLangPrimary = chosenLang.split('-')[0].toLowerCase();

                const translationStarter = () => {
                    if (isTranslating) return;
                    startTranslation({ mode: 'full' });
                }

                if (items.realTimeTranslation === true) {
                    const currentUrl = window.location.href;
                    const excludeList = items.excludeList || [];
                    const siteOrigin = new URL(currentUrl).origin;
                    if (matchesSiteList(excludeList, currentUrl, siteOrigin)) {
                        return;
                    }
                    translationStarted = true;
                    // Phased scanning as requested by user
                    setTimeout(translationStarter, 100); // Initial scan for static content
                    setTimeout(translationStarter, 1500); // Delayed scan for JS-rendered content
                } else {
                    const currentUrl = window.location.href;
                    const siteOrigin = new URL(currentUrl).origin;
                    const excludeList = items.excludeList || [];
                    const whitelist = items.whitelist || [];

                    if (matchesSiteList(excludeList, currentUrl, siteOrigin)) {
                        return;
                    }
                    if (matchesSiteList(whitelist, currentUrl, siteOrigin)) {
                        translationStarted = true;
                        setTimeout(translationStarter, 100);
                        setTimeout(translationStarter, 1500);
                        return;
                    }
                    if (!pageLangPrimary || pageLangPrimary !== chosenLangPrimary) {
                        if (items.hidePromptAllSites !== true) {
                            createTranslationPrompt(chosenLang);
                        }
                    }
                }
            });
        } catch (error) {}
    }

    function matchesSiteList(siteList, currentUrl, siteOrigin) {
        if (!Array.isArray(siteList) || siteList.length === 0) {
            return false;
        }
        return siteList.some(pattern => {
            const normalized = String(pattern || '').trim();
            if (!normalized) {
                return false;
            }
            if (!normalized.includes('*')) {
                return currentUrl.startsWith(normalized) || siteOrigin === normalized;
            }
            const wildcardRegex = buildWildcardRegex(normalized);
            return wildcardRegex.test(currentUrl) || wildcardRegex.test(siteOrigin);
        });
    }

    function buildWildcardRegex(pattern) {
        const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp(`^${escaped.replace(/\*/g, '.*')}$`, 'i');
    }

    function getPageLanguage() {
        const langAttr = document.documentElement.lang;
        if (langAttr) return langAttr.toLowerCase();
        const metaLang = document.querySelector('meta[http-equiv="content-language"]');
        if (metaLang && metaLang.content) return metaLang.content.toLowerCase();
        const url = window.location.href;
        const urlLang = extractLanguageFromUrl(url);
        if (urlLang) return urlLang.toLowerCase();
        return null;
    }

    function extractLanguageFromUrl(url) {
        try {
            const urlObj = new URL(url);
            const hostnameParts = urlObj.hostname.split('.');
            const validLanguages = ['en', 'ja', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'zh', 'ko', 'hi', 'ar', 'bn', 'id', 'tr'];
            const languagePattern = /^[a-z]{2}(?:-[a-z]{2})?$/i;
            if (hostnameParts.length > 2 && languagePattern.test(hostnameParts[0]) && validLanguages.includes(hostnameParts[0].toLowerCase())) {
                return hostnameParts[0];
            }
            const pathParts = urlObj.pathname.split('/').filter(part => part.length > 0);
            if (pathParts.length > 0 && languagePattern.test(pathParts[0]) && validLanguages.includes(pathParts[0].toLowerCase())) {
                return pathParts[0];
            }
            const langParam = urlObj.searchParams.get('lang') || urlObj.searchParams.get('language') || urlObj.searchParams.get('locale');
            if (langParam && languagePattern.test(langParam) && validLanguages.includes(langParam.toLowerCase())) {
                return langParam;
            }
        } catch (e) {}
        return null;
    }

    function clearStatusActions() {
        const actions = statusShadowRoot?.querySelector('#translationActionArea');
        if (actions) {
            actions.innerHTML = '';
            actions.style.display = 'none';
        }
    }

    function getProviderLabel(lang) {
        if (lang === 'zh-CN') return '选择 LLM 后立即翻译';
        if (lang === 'zh-TW') return '選擇 LLM 後立即翻譯';
        if (lang === 'ja') return 'LLM を選ぶとすぐ翻訳';
        return 'Choose LLM to translate now';
    }

    function normalizeProviderEntries(providerConfigs, apiProvider) {
        const entries = [];
        if (Array.isArray(providerConfigs) && providerConfigs.length > 0) {
            providerConfigs.forEach((provider, index) => {
                const id = String(provider?.id || '').trim() || `provider-${index + 1}`;
                const name = String(provider?.name || builtInProviderNames[provider?.type] || id).trim() || id;
                entries.push({ id, name });
            });
            return entries;
        }

        Object.keys(builtInProviderNames).forEach(id => {
            entries.push({ id, name: builtInProviderNames[id] });
        });

        if (apiProvider && !entries.some(entry => entry.id === apiProvider)) {
            entries.unshift({ id: apiProvider, name: apiProvider });
        }
        return entries;
    }

    async function setActiveProvider(providerId) {
        if (!providerId) return;
        activeProviderId = providerId;
        const chips = statusShadowRoot?.querySelectorAll('.provider-chip');
        if (chips) {
            chips.forEach(chip => {
                const isActive = chip.dataset.providerId === providerId;
                chip.classList.toggle('active', isActive);
                chip.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });
        }
        try {
            await chrome.storage.local.set({ apiProvider: providerId });
        } catch (error) {}
    }

    function renderProviderSelector(lang, providerConfigs, apiProvider, actions) {
        providerEntries = normalizeProviderEntries(providerConfigs, apiProvider);
        activeProviderId = providerEntries.some(entry => entry.id === apiProvider)
            ? apiProvider
            : (providerEntries[0]?.id || '');

        const providerSection = document.createElement('div');
        providerSection.className = 'provider-section';

        const providerLabel = document.createElement('div');
        providerLabel.className = 'provider-label';
        providerLabel.textContent = getProviderLabel(lang);
        providerSection.appendChild(providerLabel);

        const providerGrid = document.createElement('div');
        providerGrid.className = 'provider-grid';

        providerEntries.forEach(entry => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `provider-chip${entry.id === activeProviderId ? ' active' : ''}`;
            button.dataset.providerId = entry.id;
            button.setAttribute('aria-pressed', entry.id === activeProviderId ? 'true' : 'false');
            button.textContent = entry.name;
            button.addEventListener('click', async function() {
                await setActiveProvider(entry.id);
                removePrompt();
                translationStarted = true;
                startTranslation({ mode: 'visible' });
            });
            providerGrid.appendChild(button);
        });

        providerSection.appendChild(providerGrid);
        actions.appendChild(providerSection);

        if (activeProviderId && activeProviderId !== apiProvider) {
            chrome.storage.local.set({ apiProvider: activeProviderId }).catch(() => {});
        }
    }

    async function createTranslationPrompt(lang) {
        if (isTranslating) return;
        createStatusIndicator(lang);
        const { providerConfigs, apiProvider } = await chrome.storage.local.get(['providerConfigs', 'apiProvider']);
        const promptMsg = promptMessages[lang] || promptMessages.en;
        const allButtonText = translateAllButtonTexts[lang] || translateAllButtonTexts.en;
        const btnTexts = translateButtonTexts[lang] || translateButtonTexts.en;
        const headerElem = statusShadowRoot?.querySelector('#translationHeaderText');
        const promptTextElem = statusShadowRoot?.querySelector('#translationPromptText');
        const progressBar = statusShadowRoot?.querySelector('.progress-bar');
        const progressText = statusShadowRoot?.querySelector('#translationProgressText');
        const statsElem = statusShadowRoot?.querySelector('#translationStats');
        const cancelButton = statusShadowRoot?.querySelector('#cancelTranslationBtn');
        const closeButton = statusShadowRoot?.querySelector('.close-status-btn');
        const minimizeButton = statusShadowRoot?.querySelector('#minimizeStatusBtn');
        const actions = statusShadowRoot?.querySelector('#translationActionArea');

        if (!actions) return;

        if (headerElem) headerElem.textContent = promptMsg;
        if (promptTextElem) {
            promptTextElem.textContent = '';
            promptTextElem.style.display = 'none';
        }
        if (progressBar) progressBar.style.display = 'none';
        if (progressText) progressText.style.display = 'none';
        if (statsElem) statsElem.style.display = 'none';
        if (cancelButton) cancelButton.style.display = 'none';
        if (closeButton) closeButton.remove();
        if (minimizeButton) minimizeButton.style.display = 'none';

        clearStatusActions();
        actions.style.display = 'flex';
        renderProviderSelector(lang, providerConfigs, apiProvider, actions);

        const allButton = document.createElement('button');
        allButton.id = 'translate-all';
        allButton.className = 'action-btn success';
        allButton.textContent = allButtonText;

        const noButton = document.createElement('button');
        noButton.id = 'translate-no';
        noButton.className = 'action-btn subtle';
        noButton.textContent = btnTexts.no;

        const neverButton = document.createElement('button');
        neverButton.id = 'translate-never';
        neverButton.className = 'action-btn subtle full';
        neverButton.textContent = btnTexts.never;

        const secondaryRow = document.createElement('div');
        secondaryRow.className = 'prompt-secondary-row';
        secondaryRow.appendChild(allButton);
        secondaryRow.appendChild(noButton);
        secondaryRow.appendChild(neverButton);
        actions.appendChild(secondaryRow);

        allButton.addEventListener('click', function() {
            removePrompt();
            translationStarted = true;
            startTranslation({ mode: 'full' });
        });
        noButton.addEventListener('click', function() {
            removePrompt();
        });
        neverButton.addEventListener('click', function() {
            chrome.storage.local.get(['excludeList'], function(items) {
                let excludeList = items.excludeList || [];
                const siteOrigin = new URL(window.location.href).origin;
                if (!excludeList.includes(siteOrigin)) {
                    excludeList.push(siteOrigin);
                    chrome.storage.local.set({ excludeList });
                }
            });
            removePrompt();
        });
    }

    function removePrompt() {
        clearStatusActions();
        if (!isTranslating) {
            removeStatusIndicator();
        }
        promptContainer = null;
        promptShadowRoot = null;
    }

    const mutationCallback = (mutations) => {
        if (translationHasError) return;
        try {
            let newNodesAdded = false;
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.shadowRoot) {
                                attachObserver(node.shadowRoot);
                            }
                            node.querySelectorAll('*').forEach(el => {
                                if (el.shadowRoot) {
                                    attachObserver(el.shadowRoot);
                                }
                            });
                        }
                        if (node.nodeType === Node.ELEMENT_NODE && (node.dataset?.translationWrapper === "true" || isExcludedElement(node))) {
                            return;
                        }
                        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
                        let textNode;
                        while (textNode = walker.nextNode()) {
                            const parentElement = textNode.parentElement;
                            if (
                                isTranslateableTextNode(textNode.textContent) &&
                                !isExcludedElement(parentElement) &&
                                !textNodeInfos.has(textNode) &&
                                parentElement?.dataset?.translationWrapper !== "true"
                            ) {
                                textNodeInfos.set(textNode, {
                                    originalText: textNode.textContent,
                                    status: 'pending'
                                });
                                newNodesAdded = true;
                            }
                        }
                    });
                }
            });
            if (newNodesAdded && translationStarted && !isTranslating && !translationCancelled) {
                clearTimeout(observerDebounceTimer);
                observerDebounceTimer = setTimeout(() => {
                    if (translationStarted && !isTranslating && !translationCancelled) {
                        startTranslation({ mode: activeTranslationMode });
                    }
                }, 500);
            }
        } catch (observerError) {}
    };

    function attachObserver(root) {
        if (root.dataset?.observerAttached === 'true') return;
        try {
            const observer = new MutationObserver(mutationCallback);
            observer.observe(root, observerConfig);
            activeObservers.push(observer);
            root.dataset.observerAttached = 'true';
        } catch (e) {}
    }

    function watchForNewText() {
        activeObservers.forEach(obs => obs.disconnect());
        activeObservers = [];
        const attachToAllRoots = (root) => {
            attachObserver(root);
            root.querySelectorAll('*').forEach(el => {
                if (el.shadowRoot) {
                    attachToAllRoots(el.shadowRoot);
                }
            });
        };
        try {
            if (document.body) {
                attachToAllRoots(document.body);
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    if (document.body) {
                        attachToAllRoots(document.body);
                    }
                });
            }
        } catch (error) {}
    }

    function installViewportTranslationListeners() {
        if (viewportListenersInstalled) return;
        viewportListenersInstalled = true;

        const queueViewportTranslation = () => {
            if (!translationStarted || translationCancelled || activeTranslationMode !== 'visible') {
                return;
            }
            viewportTranslationQueued = true;
            clearTimeout(viewportScrollTimer);
            viewportScrollTimer = setTimeout(() => {
                viewportScrollTimer = null;
                if (!translationStarted || translationCancelled || activeTranslationMode !== 'visible') {
                    return;
                }
                if (isTranslating) {
                    viewportTranslationQueued = true;
                    return;
                }
                viewportTranslationQueued = false;
                startTranslation({ mode: 'visible' });
            }, 350);
        };

        window.addEventListener('scroll', queueViewportTranslation, { passive: true });
        window.addEventListener('resize', queueViewportTranslation, { passive: true });
        window.addEventListener('orientationchange', queueViewportTranslation, { passive: true });
        document.addEventListener('scroll', queueViewportTranslation, true);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                queueViewportTranslation();
            }
        });
    }

    async function startTranslation(options = {}) {
        if (isTranslating) return;
        isTranslating = true;
        translationStarted = true;
        translationCancelled = false;
        translationHasError = false;
        viewportTranslationQueued = false;
        clearTimeout(viewportScrollTimer);
        viewportScrollTimer = null;
        translatedFragmentsCount = 0;
        totalBatches = 0;
        batchesProcessed = 0;
        expectedTotalFragments = 0;
        translationProgress = 0;
        domUpdateQueue = [];
        isApplyingUpdates = false;
        const translationMode = options.mode === 'full' ? 'full' : 'visible';
        activeTranslationMode = translationMode;
        let lang = 'en';
        try {
            const config = await new Promise(resolve => {
                chrome.storage.local.get(['targetLanguage', 'showProgressPopup', 'apiProvider', 'batchSize', 'maxBatchLength'], resolve);
            });
            lang = config.targetLanguage || 'en';
            const st = statusTranslations[lang] || statusTranslations.en;

            const textFragments = collectTextFragments();
            if (textFragments.length === 0) {
                isTranslating = false;
                chrome.runtime.sendMessage({ action: "translationComplete", message: st.noTextFound });
                removeStatusIndicator();
                return;
            }
            const selectedFragments = selectTextFragmentsForTranslation(textFragments, translationMode);
            if (selectedFragments.length === 0) {
                isTranslating = false;
                chrome.runtime.sendMessage({ action: "translationComplete", message: st.noTextFound });
                removeStatusIndicator();
                return;
            }
            expectedTotalFragments = selectedFragments.length;

            const subBatches = createSubBatches(selectedFragments, config.batchSize || 80, config.maxBatchLength || 5000);
            totalBatches = subBatches.length;

            if (config.showProgressPopup !== false) {
                createOrShowProgressPopup(lang);
                if (progressInterval) clearInterval(progressInterval);
                progressInterval = setInterval(() => updateProgress(lang), 300);
            }
            updateProgress(lang);

            const batchPromises = subBatches.map(batch =>
                processBatch(batch, config.targetLanguage, config.apiProvider, lang)
                .then(translations => {
                    if (translationCancelled || translationHasError) return;
                    batchesProcessed++;
                    domUpdateQueue.push(translations);
                    if (!isApplyingUpdates) {
                        applyQueuedUpdates();
                    }
                })
                .catch(error => {
                    if (!translationCancelled && !translationHasError) {
                        translationHasError = true;
                        chrome.runtime.sendMessage({ action: "translationError", error: error.message });
                        throw error;
                    }
                })
            );

            try {
                await Promise.all(batchPromises);
            } catch (error) {
                handleTranslationError(error, lang);
                isTranslating = false;
                if (progressInterval) clearInterval(progressInterval);
                return;
            }

            await new Promise(resolve => {
                const interval = setInterval(() => {
                    if (!isApplyingUpdates && domUpdateQueue.length === 0) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 50);
            });

            if (translationCancelled) {
                handleCancellation(lang);
            } else if (!translationHasError) {
                finishTranslation(lang);
            }

        } catch (error) {
            if (!translationCancelled) handleTranslationError(error, lang);
        } finally {
            isTranslating = false;
            if (progressInterval) clearInterval(progressInterval);
            updateTranslateAllStatusButton(lang);
            if (pendingTranslationModeAfterCancel) {
                const nextMode = pendingTranslationModeAfterCancel;
                pendingTranslationModeAfterCancel = null;
                if (!translationHasError) {
                    startTranslation({ mode: nextMode });
                }
            }
        }
    }

    async function applyQueuedUpdates() {
        if (isApplyingUpdates) return;
        isApplyingUpdates = true;
        activeObservers.forEach(obs => obs.disconnect());
        try {
            while (domUpdateQueue.length > 0) {
                if (translationCancelled) {
                    domUpdateQueue = [];
                    break;
                }
                const translatedBatch = domUpdateQueue.shift();
                if (Array.isArray(translatedBatch)) {
                    for (const translatedFragment of translatedBatch) {
                        const node = fragmentNodeMap.get(translatedFragment.id);
                        if (node) {
                            applyTranslation(node, translatedFragment.translation);
                        }
                    }
                }
                await new Promise(resolve => requestAnimationFrame(resolve));
            }
        } finally {
            watchForNewText();
            isApplyingUpdates = false;
        }
    }

    function handleTranslationError(error, lang) {
        translationHasError = true;
        const st = statusTranslations[lang] || statusTranslations.en;
        const apiLimitMsg = st.apiLimitError;
        const cancelledMsg = st.translationCancelled;
        if (error?.message?.includes(cancelledMsg) || error?.name === 'AbortError' || translationCancelled) {
            handleCancellation(lang);
            return;
        }
        let errorMessage = st.errorOccurred;
        if (error && error.message) {
            if (error.message.includes('API request limit reached') || error.message.includes('APIリクエスト制限')) {
                 errorMessage = apiLimitMsg;
            } else {
                 errorMessage = `${st.errorOccurred}: ${error.message}`;
            }
        } else if (error) {
            errorMessage = `${st.errorOccurred}: ${JSON.stringify(error)}`;
        }
        updateProgress(lang);
        if (statusShadowRoot) {
            showErrorPopup(errorMessage, lang);
        }
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        chrome.runtime.sendMessage({ action: "translationError", error: errorMessage });
    }

    function showErrorPopup(errorMessage, lang) {
        const st = statusTranslations[lang] || statusTranslations.en;
        if (!statusShadowRoot) return;
        const translationStatus = statusShadowRoot.querySelector('.status');
        if (!translationStatus) return;
        while (translationStatus.firstChild) {
            translationStatus.removeChild(translationStatus.firstChild);
        }
        const errorHeader = document.createElement('div');
        errorHeader.id = 'translationStatusHeader';
        errorHeader.style.fontWeight = 'bold';
        errorHeader.style.marginBottom = '10px';
        errorHeader.textContent = st.errorOccurred;
        const errorText = document.createElement('div');
        errorText.id = 'errorText';
        errorText.textContent = errorMessage;
        errorText.style.marginTop = '10px';
        errorText.style.color = 'red';
        errorText.style.wordWrap = 'break-word';
        errorText.style.fontSize = '12px';
        errorText.style.textAlign = 'left';
        translationStatus.appendChild(errorHeader);
        translationStatus.appendChild(errorText);

        if (errorMessage.includes('options page') || errorMessage.includes('オプションページ')) {
            const optionsLink = document.createElement('a');
            optionsLink.href = chrome.runtime.getURL('options.html');
            optionsLink.target = '_blank';
            optionsLink.textContent = st.openOptions;
            optionsLink.style.display = 'block';
            optionsLink.style.marginTop = '10px';
            optionsLink.style.fontSize = '12px';
            optionsLink.style.textAlign = 'center';
            translationStatus.appendChild(optionsLink);
        }

        const closeButton = document.createElement('button');
        closeButton.className = 'close-status-btn';
        closeButton.textContent = st.closeButton;
        closeButton.style.marginTop = '15px';
        closeButton.style.padding = '5px 10px';
        closeButton.style.backgroundColor = '#4285f4';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '4px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.width = '100%';
        closeButton.style.boxSizing = 'border-box';
        closeButton.style.fontSize = '12px';
        closeButton.addEventListener('click', function() {
            removeStatusIndicator();
        });
        translationStatus.appendChild(closeButton);
    }

    function handleCancellation(lang) {
        translationCancelled = true;
        viewportTranslationQueued = false;
        clearTimeout(viewportScrollTimer);
        viewportScrollTimer = null;
        const st = statusTranslations[lang] || statusTranslations.en;
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        updateProgress(lang);
        if (statusShadowRoot) {
            const statusDiv = statusShadowRoot.querySelector('.status');
            const headerElem = statusShadowRoot.querySelector('#translationHeaderText');
            const progressBar = statusShadowRoot.querySelector('.progress-bar');
            const cancelButton = statusShadowRoot.querySelector('#cancelTranslationBtn');
            const minimizeButton = statusShadowRoot.querySelector('#minimizeStatusBtn');
            if (headerElem) headerElem.textContent = st.translationCancelled;
            if (progressBar) progressBar.style.display = 'none';
            if (cancelButton) cancelButton.remove();
            if (minimizeButton) minimizeButton.style.display = 'none';
            let closeButton = statusDiv?.querySelector('.close-status-btn');
            if (statusDiv && !closeButton) {
                closeButton = document.createElement('button');
                closeButton.className = 'close-status-btn';
                closeButton.textContent = st.closeButton;
                closeButton.style.marginTop = '15px';
                closeButton.style.padding = '5px 10px';
                closeButton.style.backgroundColor = '#4285f4';
                closeButton.style.color = 'white';
                closeButton.style.border = 'none';
                closeButton.style.borderRadius = '4px';
                closeButton.style.cursor = 'pointer';
                closeButton.style.width = '100%';
                closeButton.style.boxSizing = 'border-box';
                closeButton.style.fontSize = '12px';
                closeButton.addEventListener('click', removeStatusIndicator);
                statusDiv.appendChild(closeButton);
            } else if (closeButton) {
                closeButton.style.display = 'block';
            }
        }
        revertAllTranslations();
        fragmentNodeMap.clear();
        chrome.runtime.sendMessage({ action: "translationCancelled" });
    }

    function collectTextFragments() {
        const fragments = [];
        fragmentNodeMap.clear();
        let fragmentId = 0;
        let traversalIndex = 0;

        function traverse(rootNode) {
            const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                const nodeInfo = textNodeInfos.get(node);
                if (nodeInfo && nodeInfo.status === 'pending' && isTranslateableTextNode(node.textContent)) {
                    const paragraphElement = getParagraphContainer(node);
                    const rect = getNodeTextRect(node);
                    const fragment = {
                        id: `fragment_${fragmentId++}`,
                        text: nodeInfo.originalText,
                        order: traversalIndex++,
                        paragraphElement,
                        rect
                    };
                    fragments.push(fragment);
                    fragmentNodeMap.set(fragment.id, node);
                }
            }
        }

        if (document.body) {
            traverse(document.body);
            document.querySelectorAll('*').forEach(el => {
                if (el.shadowRoot) {
                    traverse(el.shadowRoot);
                }
            });
        }
        return fragments;
    }

    function createSubBatches(fragments, batchSize, maxBatchLength) {
        const subBatches = [];
        let currentBatch = [];
        let currentLength = 0;
        for (const fragment of fragments) {
            const fragmentLength = fragment.text.length;
            if (currentBatch.length > 0 && (currentBatch.length >= batchSize || currentLength + fragmentLength > maxBatchLength)) {
                subBatches.push(currentBatch);
                currentBatch = [];
                currentLength = 0;
            }
            currentBatch.push(fragment);
            currentLength += fragmentLength;
        }
        if (currentBatch.length > 0) {
            subBatches.push(currentBatch);
        }
        return subBatches;
    }

    function initializeTextNodeMap() {
        textNodeInfos = new WeakMap();
        if (!document.body) {
            return;
        }

        function findAndProcessTextNodes(rootNode) {
            const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                const text = node.textContent;
                const parentElement = node.parentElement;
                if (
                    !isExcludedElement(parentElement) &&
                    isTranslateableTextNode(text) &&
                    parentElement?.dataset?.translationWrapper !== "true"
                ) {
                    textNodeInfos.set(node, { originalText: text, status: 'pending' });
                }
            }
            const elements = rootNode.querySelectorAll('*');
            for (const element of elements) {
                if (element.shadowRoot) {
                    findAndProcessTextNodes(element.shadowRoot);
                }
            }
        }
        findAndProcessTextNodes(document.body);
    }

    function isExcludedElement(element) {
        if (!element || !element.isConnected) return true;
        if (!(element instanceof Element)) return true; // Ensure it's an element

        let current = element;
        let depth = 0;
        while (current && depth < 30) {
            const style = window.getComputedStyle(current);
            if (style.display === 'none' || style.visibility === 'hidden') {
                return true;
            }

            // if (current.isContentEditable) return true;

            const excludedTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'IFRAME', 'CANVAS', 'TEXTAREA', 'INPUT', 'BUTTON']; // Removed CODE and PRE
            if (excludedTags.includes(current.nodeName)) return true;

            if (current.dataset.geminiIgnore === "true" || current.getAttribute('translate') === 'no' || current.classList.contains('notranslate')) {
                return true;
            }

            current = current.parentElement;
            depth++;
        }
        return false;
    }

    function isTranslateableTextNode(text) {
        const trimmedText = text.trim();
        if (trimmedText.length === 0) return false;
        // This regex checks for strings that consist mostly of symbols or numbers, but allows them if they contain at least one word of 3+ letters.
        if (/^[^a-zA-Z]*$/.test(trimmedText) && !/\w{3,}/.test(trimmedText)) {
            return false;
        }
        return true;
    }

    function isBlockLikeElement(element) {
        if (!element || !(element instanceof Element)) return false;
        const tagName = element.tagName;
        if (['P', 'LI', 'BLOCKQUOTE', 'ARTICLE', 'SECTION', 'NAV', 'ASIDE', 'MAIN', 'HEADER', 'FOOTER', 'ADDRESS', 'PRE', 'TD', 'TH', 'FIGCAPTION', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(tagName)) {
            return true;
        }
        const style = window.getComputedStyle(element);
        return ['block', 'list-item', 'flow-root', 'table', 'table-cell', 'flex', 'grid'].includes(style.display);
    }

    function getParagraphContainer(node) {
        let current = node?.parentElement || null;
        let fallback = current || document.body;
        while (current && current !== document.body) {
            if (isBlockLikeElement(current)) {
                return current;
            }
            fallback = current;
            current = current.parentElement;
        }
        return fallback || document.body;
    }

    function getNodeTextRect(node) {
        try {
            const range = document.createRange();
            range.selectNodeContents(node);
            const rect = range.getBoundingClientRect();
            if (rect && (rect.width > 0 || rect.height > 0)) {
                return rect;
            }
        } catch (error) {}
        return null;
    }

    function mergeRects(rects) {
        if (!rects || rects.length === 0) return null;
        let top = Infinity;
        let left = Infinity;
        let right = -Infinity;
        let bottom = -Infinity;
        for (const rect of rects) {
            if (!rect) continue;
            top = Math.min(top, rect.top);
            left = Math.min(left, rect.left);
            right = Math.max(right, rect.right);
            bottom = Math.max(bottom, rect.bottom);
        }
        if (!isFinite(top) || !isFinite(left) || !isFinite(right) || !isFinite(bottom)) {
            return null;
        }
        return { top, left, right, bottom };
    }

    function intersectsViewport(rect, margin = 0) {
        if (!rect) return false;
        return rect.bottom >= -margin && rect.top <= window.innerHeight + margin;
    }

    function distanceToViewport(rect) {
        if (!rect) return Number.POSITIVE_INFINITY;
        if (intersectsViewport(rect, 0)) return 0;
        if (rect.bottom < 0) return Math.abs(rect.bottom);
        if (rect.top > window.innerHeight) return rect.top - window.innerHeight;
        return 0;
    }

    function selectTextFragmentsForTranslation(fragments, mode) {
        const orderedFragments = [...fragments].sort((a, b) => a.order - b.order);
        if (mode === 'full') {
            return orderedFragments;
        }

        const groups = [];
        const groupMap = new Map();
        for (const fragment of orderedFragments) {
            const key = fragment.paragraphElement || document.body;
            let group = groupMap.get(key);
            if (!group) {
                group = {
                    key,
                    fragments: [],
                    rects: [],
                    index: groups.length
                };
                groupMap.set(key, group);
                groups.push(group);
            }
            group.fragments.push(fragment);
            if (fragment.rect) {
                group.rects.push(fragment.rect);
            }
        }

        const viewportMargin = 160;
        for (const group of groups) {
            group.bounds = mergeRects(group.rects);
            group.visible = intersectsViewport(group.bounds, viewportMargin);
            group.distance = distanceToViewport(group.bounds);
        }

        let selectedIndices = groups.filter(group => group.visible).map(group => group.index);
        if (selectedIndices.length === 0 && groups.length > 0) {
            const nearestGroup = groups
                .filter(group => Number.isFinite(group.distance))
                .sort((a, b) => a.distance - b.distance)[0] || groups[0];
            if (nearestGroup) {
                selectedIndices = [nearestGroup.index];
            }
        }

        if (selectedIndices.length === 0) {
            return orderedFragments;
        }

        const beforeContext = 2;
        const afterContext = 2;
        const startIndex = Math.max(0, Math.min(...selectedIndices) - beforeContext);
        const endIndex = Math.min(groups.length - 1, Math.max(...selectedIndices) + afterContext);
        const allowedGroups = new Set(groups.slice(startIndex, endIndex + 1).map(group => group.key));
        return orderedFragments.filter(fragment => allowedGroups.has(fragment.paragraphElement || document.body));
    }

    async function processBatch(batch, targetLanguage, apiProvider, lang) {
        if (translationCancelled) return [];
        const apiBatch = batch; // Batch is already in the format [{id, text}]

        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({
                action: "translateBatch",
                batch: apiBatch,
                targetLanguage,
                apiProvider,
                lang
            }, response => {
                if (chrome.runtime.lastError) {
                    return reject(new Error(chrome.runtime.lastError.message));
                }
                if (response.success) {
                    // Resolve with the translations array which is [{id, translation}]
                    return resolve(response.translations);
                }
                reject(new Error(response.error));
            });
        });
    }

    function applyTranslation(node, translatedText) {
        if (!textNodeInfos.has(node)) return;
        const nodeInfo = textNodeInfos.get(node);
        let wrapper = nodeInfo.wrapper?.deref();
        
        try {
            if (!wrapper || !wrapper.isConnected) {
                if (node.parentElement && node.isConnected) {
                    wrapper = document.createElement('span');
                    wrapper.dataset.translationWrapper = "true";
                    wrapper.dataset.originalText = nodeInfo.originalText;
                    try {
                        node.parentNode.insertBefore(wrapper, node);
                        wrapper.appendChild(node);
                        nodeInfo.wrapper = new WeakRef(wrapper);
                    } catch (e) {
                        return;
                    }
                } else {
                    return;
                }
            }
            const cleanedText = translatedText.replace(/(\r\n|\n|\r)/gm, " ").trim();
            if (cleanedText && node.textContent !== cleanedText) {
                node.textContent = cleanedText;
            }
            wrapper.dataset.translatedText = cleanedText;
            wrapper.dataset.translationStatus = "translated";
            chrome.storage.local.get(['toggleBlueBackground'], (items) => {
                if (items.toggleBlueBackground) {
                    wrapper.classList.add('translated-text');
                } else {
                    wrapper.classList.remove('translated-text');
                }
            });
            if (nodeInfo.status !== 'translated') {
                translatedFragmentsCount++;
            }
            nodeInfo.status = 'translated';
        } catch(e) {
        }
    }

    function toggleAllTranslations() {
        if (isTranslating) return;
        activeObservers.forEach(obs => obs.disconnect());
        try {
            let isCurrentlyTranslated = false;
            const translatedWrappers = document.querySelectorAll('span[data-translation-wrapper="true"][data-translation-status="translated"]');
            if (translatedWrappers.length > 0) {
                const firstWrapper = translatedWrappers[0];
                const firstTextNode = firstWrapper.firstChild;
                if (firstTextNode && firstTextNode.nodeType === Node.TEXT_NODE) {
                    isCurrentlyTranslated = firstWrapper.dataset.translatedText !== undefined &&
                        firstTextNode.textContent === firstWrapper.dataset.translatedText;
                }
            }
            document.querySelectorAll('span[data-translation-wrapper="true"]').forEach(wrapper => {
                const status = wrapper.dataset.translationStatus;
                const originalText = wrapper.dataset.originalText;
                const translatedText = wrapper.dataset.translatedText;
                const textNode = wrapper.firstChild;
                if (textNode && textNode.nodeType === Node.TEXT_NODE && status === 'translated') {
                    const targetText = isCurrentlyTranslated ?
                        originalText :
                        (translatedText !== undefined && translatedText !== null ? translatedText : originalText);
                    if (targetText !== undefined && textNode.textContent !== targetText) {
                        textNode.textContent = targetText;
                    }
                }
            });
        } finally {
            watchForNewText();
        }
    }

    function revertAllTranslations() {
        activeObservers.forEach(obs => obs.disconnect());
        try {
            document.querySelectorAll('span[data-translation-wrapper="true"]').forEach(wrapper => {
                const originalText = wrapper.dataset.originalText;
                const textNode = wrapper.firstChild;
                if (textNode && textNode.nodeType === Node.TEXT_NODE && originalText !== undefined) {
                    if (textNode.textContent !== originalText) {
                        textNode.textContent = originalText;
                    }
                    wrapper.dataset.translationStatus = "pending";
                    wrapper.removeAttribute("data-translated-text");
                    if (textNodeInfos.has(textNode)) {
                        textNodeInfos.get(textNode).status = 'pending';
                    }
                }
                wrapper.classList.remove('translated-text');
            });
        } finally {
            watchForNewText();
        }
    }

    function createOrShowProgressPopup(lang) {
        const st = statusTranslations[lang] || statusTranslations.en;
        if (!statusContainer) {
            createStatusIndicator(lang);
        } else {
            statusContainer.style.display = 'block';
            if (minimizedDiv) minimizedDiv.remove();
            const cancelButton = statusShadowRoot?.querySelector('#cancelTranslationBtn');
            const progressBar = statusShadowRoot?.querySelector('.progress-bar');
            const progressText = statusShadowRoot?.querySelector('#translationProgressText');
            const statsElem = statusShadowRoot?.querySelector('#translationStats');
            const promptTextElem = statusShadowRoot?.querySelector('#translationPromptText');
            const headerElem = statusShadowRoot?.querySelector('#translationHeaderText');
            const closeButton = statusShadowRoot?.querySelector('.close-status-btn');
            const minimizeButton = statusShadowRoot?.querySelector('#minimizeStatusBtn');
            clearStatusActions();
            if (headerElem) headerElem.textContent = st.translating;
            if (promptTextElem) {
                promptTextElem.textContent = '';
                promptTextElem.style.display = 'none';
            }
            if (progressBar) progressBar.style.display = 'block';
            if (progressText) progressText.style.display = 'block';
            if (statsElem) statsElem.style.display = 'block';
            if (closeButton) closeButton.remove();
            if (minimizeButton) minimizeButton.style.display = 'inline';
            if (cancelButton) {
                cancelButton.disabled = false;
                cancelButton.textContent = st.cancelButton;
                cancelButton.style.display = 'block';
                const newCancelButton = cancelButton.cloneNode(true);
                cancelButton.parentNode.replaceChild(newCancelButton, cancelButton);
                newCancelButton.addEventListener('click', () => handleCancelButtonClick(lang));
            } else {
                const statusDiv = statusShadowRoot?.querySelector('.status');
                if (statusDiv) {
                    const newCancelButton = document.createElement('button');
                    newCancelButton.id = 'cancelTranslationBtn';
                    newCancelButton.textContent = st.cancelButton;
                    newCancelButton.style.backgroundColor = '#f44336';
                    newCancelButton.style.color = 'white';
                    newCancelButton.style.border = 'none';
                    newCancelButton.style.padding = '5px 10px';
                    newCancelButton.style.borderRadius = '4px';
                    newCancelButton.style.cursor = 'pointer';
                    newCancelButton.style.fontSize = '12px';
                    newCancelButton.style.marginTop = '8px';
                    newCancelButton.style.display = 'block';
                    newCancelButton.style.width = '100%';
                    newCancelButton.style.boxSizing = 'border-box';
                    newCancelButton.addEventListener('click', () => handleCancelButtonClick(lang));
                    const statsElem = statusDiv.querySelector('.stats');
                    if (statsElem) {
                        statsElem.parentNode.insertBefore(newCancelButton, statsElem.nextSibling);
                    } else {
                        statusDiv.appendChild(newCancelButton);
                    }
                }
            }
        }
        updateTranslateAllStatusButton(lang);
        updateProgress(lang);
    }

    function handleCancelButtonClick(lang) {
        translationCancelled = true;
        const st = statusTranslations[lang] || statusTranslations.en;
        const currentHeader = statusShadowRoot?.querySelector('#translationHeaderText');
        const currentCancelBtn = statusShadowRoot?.querySelector('#cancelTranslationBtn');
        if (currentHeader) currentHeader.textContent = st.cancelling;
        if (currentCancelBtn) {
            currentCancelBtn.disabled = true;
            currentCancelBtn.textContent = st.cancelling;
        }
        chrome.runtime.sendMessage({ action: "cancelTranslation", lang: lang }, (response) => {
            if (chrome.runtime.lastError) {
                handleCancellation(lang);
            }
        }).catch(err => {
            handleCancellation(lang);
        });
    }

    function handleTranslateAllStatusButtonClick(lang) {
        if (!isTranslating || activeTranslationMode !== 'visible') {
            return;
        }
        pendingTranslationModeAfterCancel = 'full';
        handleCancelButtonClick(lang);
    }

    function updateTranslateAllStatusButton(lang) {
        const button = statusShadowRoot?.querySelector('#translateAllStatusBtn');
        if (!button) {
            return;
        }
        button.textContent = translateAllButtonTexts[lang] || translateAllButtonTexts.en;
        const shouldShow = isTranslating && activeTranslationMode === 'visible' && !translationCancelled;
        button.style.display = shouldShow ? 'block' : 'none';
        button.disabled = !shouldShow;
    }

    function createStatusIndicator(lang) {
        removeStatusIndicator();
        statusContainer = document.createElement('div');
        statusContainer.id = 'gemini-translator-status-container';
        statusContainer.style.position = 'fixed';
        statusContainer.style.bottom = '10px';
        statusContainer.style.right = '10px';
        statusContainer.style.zIndex = '2147483647';
        statusShadowRoot = statusContainer.attachShadow({ mode: 'open' });
        const st = statusTranslations[lang] || statusTranslations.en;
        const style = document.createElement('style');
        style.textContent = `.status { position: fixed !important; bottom: 10px !important; right: 10px !important; z-index: 2147483647 !important; background-color: white; border: 1px solid #ddd; border-radius: 8px; padding: 12px; box-shadow: 0 4px 18px rgba(0,0,0,0.14); font-family: Arial, sans-serif; color: #000; width: 290px; height: auto; min-height: 120px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; gap: 8px; } .progress-bar { width: 100%; height: 10px; background-color: #f0f0f0; border-radius: 5px; overflow: hidden; margin-top: 2px; } .progress-fill { height: 100%; width: 0%; background-color: #4285f4; transition: width 0.3s; } #translationPromptText { color: #444; font-size: 13px; line-height: 1.45; display: none; } #translationProgressText { color: #000; font-size: 12px; } #translationStatusHeader { display: flex; justify-content: space-between; align-items: center; font-weight: bold; width: 100%; margin-bottom: 2px; } #minimizeStatusBtn { border: none; background: none; padding: 0; margin: 0; cursor: pointer; font-size: 16px; line-height: 1; color: #888; } #minimizeStatusBtn:hover { color: #000; } .stats { font-size: 12px; color: #666; text-align: center; } #translationActionArea { display: none; flex-direction: column; gap: 10px; } .provider-section { display: flex; flex-direction: column; gap: 8px; } .provider-label { font-size: 12px; color: #555; text-align: left; } .provider-grid { display: flex; flex-wrap: wrap; gap: 8px; } .provider-chip { border: 1px solid #cfd6e4; border-radius: 999px; background: white; color: #2b3a55; cursor: pointer; font-size: 12px; padding: 7px 10px; flex: 1 1 84px; box-sizing: border-box; } .provider-chip:hover { background: #eef4ff; border-color: #8aa8e8; } .provider-chip.active { background: #2f6feb; border-color: #2f6feb; color: white; } .prompt-secondary-row { display: flex; flex-wrap: wrap; gap: 8px; } .action-btn { border: none; border-radius: 6px; cursor: pointer; font-size: 13px; padding: 8px 10px; flex: 1 1 78px; box-sizing: border-box; } .action-btn.success { background-color: #34a853; color: white; } .action-btn.success:hover { background-color: #2e8b46; } .action-btn.subtle { background-color: #f5f5f5; color: #333; } .action-btn.subtle:hover { background-color: #e0e0e0; } .action-btn.full { flex-basis: 100%; } #cancelTranslationBtn { background-color: #f44336; color: white; border: none; padding: 7px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; display: block; width: 100%; box-sizing: border-box; } #cancelTranslationBtn:hover { background-color: #d32f2f; } #cancelTranslationBtn:disabled { background-color: #cccccc; cursor: not-allowed; } .close-status-btn { margin-top: 2px; padding: 7px 10px; background-color: #4285f4; color: white; border: none; border-radius: 6px; cursor: pointer; width: 100%; box-sizing: border-box; font-size: 12px; } .close-status-btn:hover { background-color: #3367d6; }`;
        statusShadowRoot.appendChild(style);
        const translationStatus = document.createElement('div');
        translationStatus.className = 'status';
        const header = document.createElement('div');
        header.id = 'translationStatusHeader';
        header.innerHTML = `<span id="translationHeaderText">${st.translating}</span><button id="minimizeStatusBtn" title="Minimize">―</button>`;
        const promptText = document.createElement('div');
        promptText.id = 'translationPromptText';
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = `<div class="progress-fill" id="translationProgressFill"></div>`;
        const progressText = document.createElement('div');
        progressText.id = 'translationProgressText';
        progressText.textContent = '0%';
        const stats = document.createElement('div');
        stats.className = 'stats';
        stats.id = 'translationStats';
        stats.textContent = ' ';
        const actionArea = document.createElement('div');
        actionArea.id = 'translationActionArea';
        const translateAllStatusButton = document.createElement('button');
        translateAllStatusButton.id = 'translateAllStatusBtn';
        translateAllStatusButton.className = 'action-btn success full';
        translateAllStatusButton.style.display = 'none';
        translateAllStatusButton.addEventListener('click', () => handleTranslateAllStatusButtonClick(lang));
        const cancelButton = document.createElement('button');
        cancelButton.id = 'cancelTranslationBtn';
        cancelButton.textContent = st.cancelButton;
        cancelButton.addEventListener('click', () => handleCancelButtonClick(lang));
        translationStatus.appendChild(header);
        translationStatus.appendChild(promptText);
        translationStatus.appendChild(progressBar);
        translationStatus.appendChild(progressText);
        translationStatus.appendChild(stats);
        translationStatus.appendChild(actionArea);
        translationStatus.appendChild(translateAllStatusButton);
        translationStatus.appendChild(cancelButton);
        statusShadowRoot.appendChild(translationStatus);
        document.body.appendChild(statusContainer);
        statusShadowRoot.querySelector('#minimizeStatusBtn').addEventListener('click', function(e) {
            e.stopPropagation();
            minimizeStatusIndicator();
        });
        updateTranslateAllStatusButton(lang);
    }

    function removeStatusIndicator() {
        if (statusContainer && statusContainer.parentNode) {
            statusContainer.parentNode.removeChild(statusContainer);
            statusContainer = null;
            statusShadowRoot = null;
        }
        if (minimizedDiv && minimizedDiv.parentNode) {
            minimizedDiv.parentNode.removeChild(minimizedDiv);
            minimizedDiv = null;
        }
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }

    function minimizeStatusIndicator() {
        if (!statusContainer) return;
        statusContainer.style.display = 'none';
        if (!minimizedDiv) {
            minimizedDiv = document.createElement('div');
            minimizedDiv.id = 'gemini-translator-minimized-container';
            minimizedDiv.style.position = 'fixed';
            minimizedDiv.style.bottom = '10px';
            minimizedDiv.style.right = '10px';
            minimizedDiv.style.zIndex = '2147483647';
            const shadowRoot = minimizedDiv.attachShadow({ mode: 'open' });
            const style = document.createElement('style');
            style.textContent = `.minimized { position: fixed !important; bottom: 10px !important; right: 10px !important; z-index: 2147483647 !important; width: 40px; height: 40px; border-radius: 50%; background-color: white; border: 1px solid #ddd; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; color: #000; font-size: 14px; font-family: Arial, sans-serif; font-weight: bold; box-sizing: border-box; } .minimized:hover { background-color: #f0f0f0; }`;
            const circleDiv = document.createElement('div');
            circleDiv.className = 'minimized';
            circleDiv.id = 'minimizedProgressText';
            circleDiv.title = 'Click to restore';
            shadowRoot.appendChild(style);
            shadowRoot.appendChild(circleDiv);
            document.body.appendChild(minimizedDiv);
            circleDiv.addEventListener('click', function() {
                if (statusContainer) statusContainer.style.display = 'block';
                if (minimizedDiv && minimizedDiv.parentNode) {
                    minimizedDiv.parentNode.removeChild(minimizedDiv);
                }
                minimizedDiv = null;
            });
        }
        const minimizedTextElem = minimizedDiv?.shadowRoot?.getElementById('minimizedProgressText');
        if (minimizedTextElem) {
            let progText = "0%";
            if (statusShadowRoot) {
                const txt = statusShadowRoot.querySelector('#translationProgressText');
                if (txt) progText = txt.textContent;
            }
            minimizedTextElem.textContent = progText;
        }
    }

    function updateProgress(lang, forcePercent = null) {
        const st = statusTranslations[lang] || statusTranslations.en;
        if (forcePercent !== null) {
            translationProgress = Math.max(0, Math.min(100, forcePercent));
        } else {
            translationProgress = (expectedTotalFragments > 0) ?
                parseFloat(((translatedFragmentsCount / expectedTotalFragments) * 100).toFixed(1)) :
                (translationCancelled || isTranslating === false ? 100 : 0);
        }
        if (statusShadowRoot) {
            const progressFill = statusShadowRoot.querySelector('#translationProgressFill');
            const progressText = statusShadowRoot.querySelector('#translationProgressText');
            const statsElem = statusShadowRoot.querySelector('#translationStats');
            if (progressFill && progressText) {
                progressFill.style.width = translationProgress + '%';
                progressText.textContent = translationProgress.toFixed(1) + '%';
            }
            if (statsElem) {
                const template = st.progressTemplate
                    .replace('{currentBatch}', batchesProcessed)
                    .replace('{totalBatch}', totalBatches)
                    .replace('{translatedFragments}', translatedFragmentsCount)
                    .replace('{expected}', expectedTotalFragments);
                statsElem.textContent = template;
            }
        }
        if (minimizedDiv && minimizedDiv.shadowRoot) {
            const circleDiv = minimizedDiv.shadowRoot.querySelector('#minimizedProgressText');
            if (circleDiv) {
                circleDiv.textContent = translationProgress.toFixed(0) + '%';
            }
        }
        chrome.runtime.sendMessage({
            action: "updateProgress",
            progress: translationProgress,
            stats: {
                batches: batchesProcessed,
                totalBatches,
                translatedFragments: translatedFragmentsCount,
                totalFragments: expectedTotalFragments
            }
        }).catch(err => {});
    }

    function finishTranslation(lang) {
        const st = statusTranslations[lang] || statusTranslations.en;
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }

        if (activeTranslationMode === 'visible' && translationStarted && !translationCancelled && viewportTranslationQueued) {
            viewportTranslationQueued = false;
            isTranslating = false;
            setTimeout(() => {
                if (translationStarted && !isTranslating && !translationCancelled && activeTranslationMode === 'visible') {
                    startTranslation({ mode: 'visible' });
                }
            }, 0);
            return;
        }

        updateProgress(lang, 100);
        if (statusShadowRoot) {
            const headerElem = statusShadowRoot.querySelector('#translationHeaderText');
            const cancelButton = statusShadowRoot.querySelector('#cancelTranslationBtn');
            const statusDiv = statusShadowRoot.querySelector('.status');
            const minimizeButton = statusShadowRoot.querySelector('#minimizeStatusBtn');
            if (headerElem) headerElem.textContent = st.translationCompleted;
            if (cancelButton) cancelButton.remove();
            if (minimizeButton) minimizeButton.style.display = 'none';
            let closeButton = statusDiv?.querySelector('.close-status-btn');
            if (statusDiv && !closeButton) {
                closeButton = document.createElement('button');
                closeButton.className = 'close-status-btn';
                closeButton.textContent = st.closeButton;
                closeButton.style.marginTop = '15px';
                closeButton.style.padding = '5px 10px';
                closeButton.style.backgroundColor = '#4285f4';
                closeButton.style.color = 'white';
                closeButton.style.border = 'none';
                closeButton.style.borderRadius = '4px';
                closeButton.style.cursor = 'pointer';
                closeButton.style.width = '100%';
                closeButton.style.boxSizing = 'border-box';
                closeButton.style.fontSize = '12px';
                closeButton.addEventListener('click', removeStatusIndicator);
                const statsElem = statusDiv.querySelector('.stats');
                if (statsElem) {
                    statsElem.parentNode.insertBefore(closeButton, statsElem.nextSibling);
                } else {
                    statusDiv.appendChild(closeButton);
                }
            } else if (closeButton) {
                closeButton.style.display = 'block';
            }
        }
        chrome.runtime.sendMessage({ action: "translationComplete", message: st.translationCompleted });
        setTimeout(() => {
            if (!isTranslating) {
                removeStatusIndicator();
            }
        }, 3000);
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTranslation);
    } else {
        setTimeout(initTranslation, 100);
    }
    try {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (sender.tab) {
                return false;
            }
            try {
                switch (request.action) {
                    case "getTranslationStatus":
                        sendResponse({
                            isTranslating,
                            progress: translationProgress,
                            stats: {
                                batches: batchesProcessed,
                                totalBatches,
                                translatedFragments: translatedFragmentsCount,
                                totalFragments: expectedTotalFragments
                            }
                        });
                        return true;
                    case "startTranslationFromPopup":
                        removePrompt();
                        if (!isTranslating) {
                            translationStarted = true;
                            startTranslation({ mode: request.mode === 'full' ? 'full' : 'visible' });
                            sendResponse({ status: "starting" });
                        } else {
                            sendResponse({ status: "alreadyTranslating" });
                        }
                        return true;
                    case "toggleTranslation":
                        if (isTranslating) {
                            sendResponse({ status: "Translating" });
                        } else {
                            toggleAllTranslations();
                            sendResponse({ status: "toggled" });
                        }
                        return false;
                    case "translationCancelled":
                        if (!translationCancelled) {
                            chrome.storage.local.get(['targetLanguage'], (items) => {
                                const lang = items.targetLanguage || 'en';
                                handleCancellation(lang);
                            });
                        }
                        sendResponse({ status: "cancelled_ack" });
                        return true;
                    default:
                        return false;
                }
            } catch (listenerError) {
                return false;
            }
        });
    } catch (error) {}
})();
