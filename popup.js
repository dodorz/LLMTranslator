const uiTranslations = {
    en: { header: "LLM Translator", info: "Click the \"Translate\" button to translate the page.", translateBtn: "Translate", excludeBtn: "Don't translate this site", optionsBtn: "Open Settings", progressText: "Translating... ", translationComplete: "Translation completed", translationError: "An error occurred", noTextFound: "No text found to translate", startMessage: "Translation started", alreadyExcluded: "This site is already excluded", setExcluded: "This site is now excluded from translation", batchStats: "Blocks: {batches}/{totalBatches}, Fragments: {translatedFragments}/{totalFragments}", connecting: "Connecting to page...", noResponse: "No response from page. Please reload the page and try again.", connectionError: "Connection error. Please reload the extension and the page.", translationInProgress: "Translation in progress", translationCancelled: "Translation cancelled.", cannotExclude: "This type of page cannot be excluded.", invalidUrl: "Invalid URL for exclusion.", apiLimitError: "API request limit reached. Please try again later." },
    ja: { header: "LLM翻訳", info: "ページを翻訳するには「翻訳開始」ボタンをクリックしてください。", translateBtn: "翻訳開始", excludeBtn: "このサイトでは翻訳を使用しない", optionsBtn: "設定を開く", progressText: "翻訳中... ", translationComplete: "翻訳が完了しました", translationError: "エラーが発生しました", noTextFound: "翻訳するテキストが見つかりませんでした", startMessage: "翻訳を開始しました", alreadyExcluded: "このサイトは既に翻訳対象外です", setExcluded: "このサイトは翻訳対象外に設定されました", batchStats: "ブロック: {batches}/{totalBatches}, テキスト: {translatedFragments}/{totalFragments}", connecting: "ページに接続中...", noResponse: "ページから応答がありません。ページを再読み込みして再度お試しください。", connectionError: "接続エラー。拡張機能とページを再読み込みしてください。", translationInProgress: "翻訳中", translationCancelled: "翻訳を中止しました。", cannotExclude: "この種類のページは除外できません。", invalidUrl: "除外するには無効なURLです。", apiLimitError: "APIリクエスト制限に達しました。しばらくしてから再試行してください。" },
    fr: { header: "Traducteur LLM", info: "Cliquez sur le bouton « Traduire » pour traduire la page.", translateBtn: "Traduire", excludeBtn: "Ne pas traduire ce site", optionsBtn: "Ouvrir les paramètres", progressText: "Traduction... ", translationComplete: "Traduction terminée", translationError: "Une erreur s'est produite", noTextFound: "Aucun texte à traduire", startMessage: "Traduction lancée", alreadyExcluded: "Ce site est déjà exclu", setExcluded: "Ce site est maintenant exclu de la traduction", batchStats: "Blocs: {batches}/{totalBatches}, Fragments: {translatedFragments}/{totalFragments}", connecting: "Connexion à la page...", noResponse: "Pas de réponse de la page. Veuillez recharger la page et réessayer.", connectionError: "Erreur de connexion. Veuillez recharger l'extension et la page.", translationInProgress: "Traduction en cours", translationCancelled: "Traduction annulée.", cannotExclude: "Ce type de page ne peut pas être exclu.", invalidUrl: "URL invalide pour l'exclusion.", apiLimitError: "Limite de requêtes API atteinte. Veuillez réessayer plus tard." },
    de: { header: "LLM Übersetzer", info: "Klicken Sie auf die Schaltfläche „Übersetzen“, um die Seite zu übersetzen.", translateBtn: "Übersetzen", excludeBtn: "Diese Seite nicht übersetzen", optionsBtn: "Einstellungen öffnen", progressText: "Übersetzung... ", translationComplete: "Übersetzung abgeschlossen", translationError: "Ein Fehler ist aufgetreten", noTextFound: "Kein zu übersetzender Text gefunden", startMessage: "Übersetzung gestartet", alreadyExcluded: "Diese Seite ist bereits ausgeschlossen", setExcluded: "Diese Seite ist nun von der Übersetzung ausgeschlossen", batchStats: "Blöcke: {batches}/{totalBatches}, Fragmente: {translatedFragments}/{totalFragments}", connecting: "Verbindung zur Seite wird hergestellt...", noResponse: "Keine Antwort von der Seite. Bitte laden Sie die Seite neu und versuchen Sie es erneut.", connectionError: "Verbindungsfehler. Bitte laden Sie die Erweiterung und die Seite neu.", translationInProgress: "Übersetzung läuft", translationCancelled: "Übersetzung abgebrochen.", cannotExclude: "Dieser Seitentyp kann nicht ausgeschlossen werden.", invalidUrl: "Ungültige URL für den Ausschluss.", apiLimitError: "API-Anfragelimit erreicht. Bitte versuchen Sie es später erneut." },
    es: { header: "Traductor LLM", info: "Haga clic en el botón 'Traducir' para traducir la página.", translateBtn: "Traducir", excludeBtn: "No traducir este sitio", optionsBtn: "Abrir configuración", progressText: "Traduciendo... ", translationComplete: "Traducción completada", translationError: "Ocurrió un error", noTextFound: "No se encontró texto para traducir", startMessage: "Traducción iniciada", alreadyExcluded: "Este sitio ya está excluido", setExcluded: "Este sitio ahora está excluido de la traducción", batchStats: "Bloques: {batches}/{totalBatches}, Fragmentos: {translatedFragments}/{totalFragments}", connecting: "Conectando a la página...", noResponse: "No hay respuesta de la página. Por favor, recargue la página e inténtelo de nuevo.", connectionError: "Error de conexión. Por favor, recargue la extensión y la página.", translationInProgress: "Traducción en progreso", translationCancelled: "Traducción cancelada.", cannotExclude: "Este tipo de página no se puede excluir.", invalidUrl: "URL no válida para exclusión.", apiLimitError: "Se alcanzó el límite de solicitudes API. Inténtelo de nuevo más tarde." },
    it: { header: "Traduttore LLM", info: "Clicca sul pulsante 'Traduci' per tradurre la pagina.", translateBtn: "Traduci", excludeBtn: "Non tradurre questo sito", optionsBtn: "Apri Impostazioni", progressText: "Traducendo... ", translationComplete: "Traduzione completata", translationError: "Si è verificato un errore", noTextFound: "Nessun testo da tradurre trovato", startMessage: "Traduzione avviata", alreadyExcluded: "Questo sito è già escluso", setExcluded: "Questo sito è ora escluso dalla traduzione", batchStats: "Blocchi: {batches}/{totalBatches}, Frammenti: {translatedFragments}/{totalFragments}", connecting: "Connessione alla pagina...", noResponse: "Nessuna risposta dalla pagina. Ricarica la pagina e riprova.", connectionError: "Errore di connessione. Ricarica l'estensione e la pagina.", translationInProgress: "Traduzione in corso", translationCancelled: "Traduzione annullata.", cannotExclude: "Questo tipo di pagina non può essere escluso.", invalidUrl: "URL non valido per l'esclusione.", apiLimitError: "Limite di richieste API raggiunto. Riprova più tardi." },
    pt: { header: "Tradutor LLM", info: "Clique no botão 'Traduzir' para traduzir a página.", translateBtn: "Traduzir", excludeBtn: "Não traduzir este site", optionsBtn: "Abrir Configurações", progressText: "Traduzindo... ", translationComplete: "Tradução concluída", translationError: "Ocorreu um erro", noTextFound: "Nenhum texto encontrado para traduzir", startMessage: "Tradução iniciada", alreadyExcluded: "Este site já está excluído", setExcluded: "Este site agora está excluído da tradução", batchStats: "Blocos: {batches}/{totalBatches}, Fragmentos: {translatedFragments}/{totalFragments}", connecting: "Conectando à página...", noResponse: "Sem resposta da página. Recarregue a página e tente novamente.", connectionError: "Erro de conexão. Recarregue a extensão e a página.", translationInProgress: "Tradução em andamento", translationCancelled: "Tradução cancelada.", cannotExclude: "Este tipo de página não pode ser excluído.", invalidUrl: "URL inválido para exclusão.", apiLimitError: "Limite de solicitações API atingido. Tente novamente mais tarde." },
    ru: { header: "Переводчик LLM", info: "Нажмите кнопку «Перевести», чтобы перевести страницу.", translateBtn: "Перевести", excludeBtn: "Не переводить этот сайт", optionsBtn: "Открыть настройки", progressText: "Перевод... ", translationComplete: "Перевод завершен", translationError: "Произошла ошибка", noTextFound: "Текст для перевода не найден", startMessage: "Перевод запущен", alreadyExcluded: "Этот сайт уже исключен", setExcluded: "Этот сайт теперь исключен из перевода", batchStats: "Блоки: {batches}/{totalBatches}, Фрагменты: {translatedFragments}/{totalFragments}", connecting: "Подключение к странице...", noResponse: "Нет ответа от страницы. Пожалуйста, перезагрузите страницу и повторите попытку.", connectionError: "Ошибка подключения. Пожалуйста, перезагрузите расширение и страницу.", translationInProgress: "Идет перевод", translationCancelled: "Перевод отменен.", cannotExclude: "Этот тип страницы не может быть исключен.", invalidUrl: "Недопустимый URL для исключения.", apiLimitError: "Достигнут предел запросов API. Пожалуйста, попробуйте позже." },
    'zh-CN': { header: "LLM翻译", info: "点击“翻译”按钮以翻译页面。", translateBtn: "翻译", excludeBtn: "不翻译此网站", optionsBtn: "打开设置", progressText: "翻译中... ", translationComplete: "翻译完成", translationError: "发生错误", noTextFound: "没有可翻译的文本", startMessage: "翻译已开始", alreadyExcluded: "该网站已被排除", setExcluded: "该网站现已被排除在翻译之外", batchStats: "区块: {batches}/{totalBatches}, 片段: {translatedFragments}/{totalFragments}", connecting: "正在连接到页面...", noResponse: "页面无响应。请重新加载页面后重试。", connectionError: "连接错误。请重新加载扩展和页面。", translationInProgress: "翻译进行中", translationCancelled: "翻译已取消。", cannotExclude: "无法排除此类型的页面。", invalidUrl: "用于排除的URL无效。", apiLimitError: "已达到API请求限制。请稍后再试。" },
    'zh-TW': { header: "LLM 翻譯", info: "點擊「翻譯」按鈕以翻譯頁面。", translateBtn: "翻譯", excludeBtn: "不要翻譯此網站", optionsBtn: "開啟設定", progressText: "翻譯中... ", translationComplete: "翻譯完成", translationError: "發生錯誤", noTextFound: "沒有可翻譯的文字", startMessage: "翻譯已開始", alreadyExcluded: "此網站已被排除", setExcluded: "此網站現已被排除在翻譯之外", batchStats: "區塊: {batches}/{totalBatches}, 片段: {translatedFragments}/{totalFragments}", connecting: "正在連接到頁面...", noResponse: "頁面無回應。請重新載入頁面後重試。", connectionError: "連線錯誤。請重新載入擴充功能和頁面。", translationInProgress: "翻譯進行中", translationCancelled: "翻譯已取消。", cannotExclude: "無法排除此類型的頁面。", invalidUrl: "用於排除的URL無效。", apiLimitError: "已達到API請求限制。請稍後再試。" },
    ko: { header: "LLM 번역기", info: "페이지를 번역하려면 '번역' 버튼을 클릭하세요.", translateBtn: "번역", excludeBtn: "이 사이트는 번역하지 않음", optionsBtn: "설정 열기", progressText: "번역 중... ", translationComplete: "번역이 완료되었습니다", translationError: "오류가 발생했습니다", noTextFound: "번역할 텍스트가 없습니다", startMessage: "번역을 시작했습니다", alreadyExcluded: "이 사이트는 이미 제외되었습니다", setExcluded: "이 사이트는 이제 번역에서 제외됩니다", batchStats: "블록: {batches}/{totalBatches}, 조각: {translatedFragments}/{totalFragments}", connecting: "페이지에 연결 중...", noResponse: "페이지에서 응답이 없습니다. 페이지를 새로고침하고 다시 시도하십시오.", connectionError: "연결 오류. 확장 프로그램과 페이지를 새로고침하십시오.", translationInProgress: "번역 진행 중", translationCancelled: "번역이 취소되었습니다.", cannotExclude: "이 유형의 페이지는 제외할 수 없습니다.", invalidUrl: "제외할 수 없는 URL입니다.", apiLimitError: "API 요청 한도에 도달했습니다. 나중에 다시 시도해 주세요." },
    hi: { header: "LLM अनुवादक", info: "पृष्ठ का अनुवाद करने के लिए \"अनुवाद\" बटन पर क्लिक करें।", translateBtn: "अनुवाद", excludeBtn: "इस साइट का अनुवाद न करें", optionsBtn: "सेटिंग्स खोलें", progressText: "अनुवाद चल रहा है... ", translationComplete: "अनुवाद पूरा हुआ", translationError: "एक त्रुटि हुई", noTextFound: "अनुवाद करने के लिए कोई पाठ नहीं मिला", startMessage: "अनुवाद शुरू हुआ", alreadyExcluded: "यह साइट पहले से ही बाहर रखी गई है", setExcluded: "यह साइट अब अनुवाद से बाहर रखी गई है", batchStats: "ब्लॉक: {batches}/{totalBatches}, खंड: {translatedFragments}/{totalFragments}", connecting: "पृष्ठ से कनेक्ट हो रहा है...", noResponse: "पृष्ठ से कोई प्रतिक्रिया नहीं। कृपया पृष्ठ को पुनः लोड करें और पुनः प्रयास करें।", connectionError: "कनेक्शन त्रुटि। कृपया एक्सटेंशन और पृष्ठ को पुनः लोड करें।", translationInProgress: "अनुवाद प्रगति पर है", translationCancelled: "अनुवाद रद्द कर दिया गया।", cannotExclude: "इस प्रकार के पृष्ठ को बाहर नहीं रखा जा सकता।", invalidUrl: "बहिष्करण के लिए अमान्य यूआरएल।", apiLimitError: "API अनुरोध सीमा तक पहुंच गई है। कृपया बाद में पुन: प्रयास करें।" },
    ar: { header: "مترجم LLM", info: "انقر على زر \"ترجمة\" لترجمة الصفحة.", translateBtn: "ترجمة", excludeBtn: "لا تترجم هذا الموقع", optionsBtn: "افتح الإعدادات", progressText: "جارٍ الترجمة... ", translationComplete: "اكتملت الترجمة", translationError: "حدث خطأ", noTextFound: "لم يتم العثور على نص للترجمة", startMessage: "بدأت الترجمة", alreadyExcluded: "هذا الموقع مستبعد بالفعل", setExcluded: "هذا الموقع مستبعد الآن من الترجمة", batchStats: "الكتل: {batches}/{totalBatches}, الأجزاء: {translatedFragments}/{totalFragments}", connecting: "جارٍ الاتصال بالصفحة...", noResponse: "لا يوجد رد من الصفحة. يرجى إعادة تحميل الصفحة والمحاولة مرة أخرى.", connectionError: "خطأ في الاتصال. يرجى إعادة تحميل الامتداد والصفحة.", translationInProgress: "الترجمة قيد التقدم", translationCancelled: "تم إلغاء الترجمة.", cannotExclude: "لا يمكن استبعاد هذا النوع من الصفحات.", invalidUrl: "عنوان URL غير صالح للاستبعاد.", apiLimitError: "تم الوصول إلى حد طلبات API. يرجى المحاولة مرة أخرى لاحقًا." },
    bn: { header: "LLM অনুবাদক", info: "পৃষ্ঠাটি অনুবাদ করতে \"অনুবাদ\" বোতামে ক্লিক করুন।", translateBtn: "অনুবাদ", excludeBtn: "এই সাইটটি অনুবাদ করবেন না", optionsBtn: "সেটিংস খুলুন", progressText: "অনুবাদ চলছে... ", translationComplete: "অনুবাদ সম্পন্ন হয়েছে", translationError: "একটি ত্রুটি ঘটেছে", noTextFound: "অনুবাদ করার জন্য কোনও টেক্সট পাওয়া যায়নি", startMessage: "অনুবাদ শুরু হয়েছে", alreadyExcluded: "এই সাইটটি ইতিমধ্যেই বাদ দেওয়া হয়েছে", setExcluded: "এই সাইটটি এখন অনুবাদ থেকে বাদ দেওয়া হয়েছে", batchStats: "ব্লক: {batches}/{totalBatches}, খণ্ড: {translatedFragments}/{totalFragments}", connecting: "পৃষ্ঠায় সংযোগ করা হচ্ছে...", noResponse: "পৃষ্ঠা থেকে কোন প্রতিক্রিয়া নেই। অনুগ্রহ করে পৃষ্ঠাটি পুনরায় লোড করুন এবং আবার চেষ্টা করুন।", connectionError: "সংযোগ ত্রুটি। অনুগ্রহ করে এক্সটেনশন এবং পৃষ্ঠাটি পুনরায় লোড করুন।", translationInProgress: "অনুবাদ চলছে", translationCancelled: "অনুবাদ বাতিল করা হয়েছে।", cannotExclude: "এই ধরনের পৃষ্ঠা বাদ দেওয়া যাবে না।", invalidUrl: "বাদ দেওয়ার জন্য অবৈধ ইউআরএল।", apiLimitError: "API অনুরোধের সীমা পৌঁছে গেছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।" },
    id: { header: "Penerjemah LLM", info: "Klik tombol \"Terjemahkan\" untuk menerjemahkan halaman.", translateBtn: "Terjemahkan", excludeBtn: "Jangan terjemahkan situs ini", optionsBtn: "Buka Pengaturan", progressText: "Menerjemahkan... ", translationComplete: "Terjemahan selesai", translationError: "Terjadi kesalahan", noTextFound: "Tidak ada teks yang ditemukan untuk diterjemahkan", startMessage: "Terjemahan dimulai", alreadyExcluded: "Situs ini sudah dikecualikan", setExcluded: "Situs ini sekarang dikecualikan dari terjemahan", batchStats: "Blok: {batches}/{totalBatches}, Fragmen: {translatedFragments}/{totalFragments}", connecting: "Menghubungkan ke halaman...", noResponse: "Tidak ada respons dari halaman. Muat ulang halaman dan coba lagi.", connectionError: "Kesalahan koneksi. Muat ulang ekstensi dan halaman.", translationInProgress: "Terjemahan sedang berlangsung", translationCancelled: "Terjemahan dibatalkan.", cannotExclude: "Jenis halaman ini tidak dapat dikecualikan.", invalidUrl: "URL tidak valid untuk pengecualian.", apiLimitError: "Batas permintaan API tercapai. Silakan coba lagi nanti." },
    tr: { header: "LLM Çevirmen", info: "Sayfayı çevirmek için \"Çevir\" düğmesine tıklayın.", translateBtn: "Çevir", excludeBtn: "Bu siteyi çevirme", optionsBtn: "Ayarları Aç", progressText: "Çevriliyor... ", translationComplete: "Çeviri tamamlandı", translationError: "Bir hata oluştu", noTextFound: "Çevrilecek metin bulunamadı", startMessage: "Çeviri başladı", alreadyExcluded: "Bu site zaten hariç tutulmuş", setExcluded: "Bu site artık çeviriden hariç tutuldu", batchStats: "Bloklar: {batches}/{totalBatches}, Parçalar: {translatedFragments}/{totalFragments}", connecting: "Sayfaya bağlanılıyor...", noResponse: "Sayfadan yanıt yok. Lütfen sayfayı yeniden yükleyip tekrar deneyin.", connectionError: "Bağlantı hatası. Lütfen uzantıyı ve sayfayı yeniden yükleyin.", translationInProgress: "Çeviri devam ediyor", translationCancelled: "Çeviri iptal edildi.", cannotExclude: "Bu tür bir sayfa hariç tutulamaz.", invalidUrl: "Hariç tutma için geçersiz URL.", apiLimitError: "API istek sınırına ulaşıldı. Lütfen daha sonra tekrar deneyin." }
};
let currentLangTexts = uiTranslations.en;
let currentTabId = null;
const translateAllButtonTexts = {
    en: 'Translate All',
    ja: '全文翻訳',
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

async function initPopupUI() {
    try {
        const { targetLanguage } = await chrome.storage.local.get('targetLanguage');
        const lang = targetLanguage || 'en';
        currentLangTexts = uiTranslations[lang] || uiTranslations.en;
        document.querySelector('.header').textContent = currentLangTexts.header;
        document.querySelector('.info').textContent = currentLangTexts.info;
        document.getElementById('translateBtn').textContent = currentLangTexts.translateBtn;
        document.getElementById('translateAllBtn').textContent = currentLangTexts.translateAllBtn || translateAllButtonTexts[lang] || translateAllButtonTexts.en;
        document.getElementById('excludeBtn').textContent = currentLangTexts.excludeBtn;
        document.getElementById('optionsBtn').textContent = currentLangTexts.optionsBtn;

        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tabs && tabs[0]) {
            currentTabId = tabs[0].id;
            checkTranslationStatus();
        } else {
            document.getElementById('statusText').textContent = currentLangTexts.connectionError;
            document.getElementById('translateBtn').disabled = true;
            document.getElementById('translateAllBtn').disabled = true;
            document.getElementById('excludeBtn').disabled = true;
        }
    } catch (error) {
        console.error("Error initializing popup:", error);
        document.getElementById('statusText').textContent = currentLangTexts.connectionError;
    }
}

async function checkTranslationStatus() {
    if (!currentTabId) return;
    document.getElementById('statusText').textContent = currentLangTexts.connecting;
    document.getElementById('translateBtn').disabled = true;
    document.getElementById('translateAllBtn').disabled = true;
    try {
        const response = await chrome.tabs.sendMessage(currentTabId, { action: "getTranslationStatus" });
        if (response) {
            if (response.isTranslating) {
                showProgress(response.progress);
                if (response.stats) {
                    updateStats(response.stats);
                }
                document.getElementById('statusText').textContent = currentLangTexts.translationInProgress;
                document.getElementById('translateBtn').disabled = true;
                document.getElementById('translateAllBtn').disabled = true;
            } else {
                hideProgress();
                document.getElementById('statusText').textContent = '';
                document.getElementById('translateBtn').disabled = false;
                document.getElementById('translateAllBtn').disabled = false;
            }
            document.getElementById('excludeBtn').disabled = false;
        } else {
            hideProgress();
            document.getElementById('statusText').textContent = currentLangTexts.noResponse;
            document.getElementById('translateBtn').disabled = true;
            document.getElementById('translateAllBtn').disabled = true;
            document.getElementById('excludeBtn').disabled = true;
        }
    } catch (error) {
        hideProgress();
        document.getElementById('statusText').textContent = currentLangTexts.noResponse;
        document.getElementById('translateBtn').disabled = true;
        document.getElementById('translateAllBtn').disabled = true;
        document.getElementById('excludeBtn').disabled = true;
    }
}

function showProgress(percent) {
    document.getElementById('progressContainer').style.display = 'block';
    const clampedPercent = Math.max(0, Math.min(100, percent));
    document.getElementById('progressFill').style.width = clampedPercent + '%';
    document.getElementById('progressText').textContent = currentLangTexts.progressText + clampedPercent.toFixed(1) + '%';
    document.getElementById('translateBtn').disabled = true;
    document.getElementById('translateAllBtn').disabled = true;
}

function updateStats(stats) {
    const statsElement = document.getElementById('statsText');
    if (!stats || typeof stats.batches === 'undefined') {
        statsElement.textContent = '';
        return;
    }
    const pattern = currentLangTexts.batchStats;
    const replaced = pattern
        .replace('{batches}', stats.batches ?? '?')
        .replace('{totalBatches}', stats.totalBatches ?? '?')
        .replace('{translatedFragments}', stats.translatedFragments ?? '?')
        .replace('{totalFragments}', stats.totalFragments ?? '?');
    statsElement.textContent = replaced;
}

function hideProgress() {
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('progressText').textContent = '';
    document.getElementById('statsText').textContent = '';
    document.getElementById('progressFill').style.width = '0%';
}

async function translatePage(mode = 'visible') {
    if (!currentTabId) {
        document.getElementById('statusText').textContent = currentLangTexts.connectionError;
        return;
    }
    document.getElementById('statusText').textContent = currentLangTexts.connecting;
    document.getElementById('translateBtn').disabled = true;
    document.getElementById('translateAllBtn').disabled = true;
    try {
        const response = await chrome.tabs.sendMessage(currentTabId, { action: "startTranslationFromPopup", mode });
        if (!response) {
            document.getElementById('statusText').textContent = currentLangTexts.noResponse;
            hideProgress();
            document.getElementById('translateBtn').disabled = false;
            document.getElementById('translateAllBtn').disabled = false;
            return;
        }
        if (response.status === "starting") {
            showProgress(0);
            document.getElementById('statusText').textContent = currentLangTexts.startMessage;
        } else if (response.status === "alreadyTranslating") {
            document.getElementById('statusText').textContent = currentLangTexts.translationInProgress;
            checkTranslationStatus();
        } else {
            document.getElementById('statusText').textContent = `${currentLangTexts.translationError}: Unexpected response (${response.status})`;
            hideProgress();
            document.getElementById('translateBtn').disabled = false;
            document.getElementById('translateAllBtn').disabled = false;
        }
    } catch (e) {
        document.getElementById('statusText').textContent = `${currentLangTexts.connectionError}`;
        hideProgress();
        document.getElementById('translateBtn').disabled = false;
        document.getElementById('translateAllBtn').disabled = false;
    }
}

async function excludeCurrentSite() {
    if (!currentTabId) return;
    try {
        const tab = await chrome.tabs.get(currentTabId);
        if (!tab || !tab.url) {
            document.getElementById('statusText').textContent = currentLangTexts.connectionError;
            return;
        }
        const currentUrl = tab.url;
        if (currentUrl.startsWith('about:') || currentUrl.startsWith('chrome:') || currentUrl.startsWith('chrome-extension:')) {
            document.getElementById('statusText').textContent = currentLangTexts.cannotExclude;
            return;
        }
        const siteOrigin = new URL(currentUrl).origin;
        const items = await chrome.storage.local.get(['excludeList']);
        let excludeList = [];
        if (items.excludeList && Array.isArray(items.excludeList)) {
            excludeList = items.excludeList;
        }
        if (!excludeList.includes(siteOrigin)) {
            excludeList.push(siteOrigin);
            await chrome.storage.local.set({ excludeList: excludeList });
            document.getElementById('statusText').textContent = currentLangTexts.setExcluded;
        } else {
            document.getElementById('statusText').textContent = currentLangTexts.alreadyExcluded;
        }
    } catch (e) {
        document.getElementById('statusText').textContent = currentLangTexts.invalidUrl;
    }
}

document.addEventListener('DOMContentLoaded', initPopupUI);
document.getElementById('translateBtn').addEventListener('click', () => translatePage('visible'));
document.getElementById('translateAllBtn').addEventListener('click', () => translatePage('full'));
document.getElementById('excludeBtn').addEventListener('click', excludeCurrentSite);
document.getElementById('optionsBtn').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (!sender || !sender.tab || sender.tab.id !== currentTabId) {
        return true;
    }
    switch (request.action) {
        case "updateProgress":
            showProgress(request.progress);
            if (request.stats) {
                updateStats(request.stats);
            }
            document.getElementById('statusText').textContent = currentLangTexts.translationInProgress;
            break;
        case "translationComplete":
            hideProgress();
            document.getElementById('statusText').textContent = request.message || currentLangTexts.translationComplete;
            document.getElementById('translateBtn').disabled = false;
            document.getElementById('translateAllBtn').disabled = false;
            break;
        case "translationError":
            hideProgress();
            let errorMessage = request.error || currentLangTexts.translationError;
            if (errorMessage === currentLangTexts.apiLimitReached || errorMessage.includes('API request limit reached')) {
                document.getElementById('statusText').textContent = currentLangTexts.apiLimitError;
            } else if (errorMessage === currentLangTexts.translationCancelled || errorMessage.includes('Translation cancelled')) {
                 document.getElementById('statusText').textContent = currentLangTexts.translationCancelled;
            } else {
                document.getElementById('statusText').textContent = errorMessage;
            }
            document.getElementById('translateBtn').disabled = false;
            document.getElementById('translateAllBtn').disabled = false;
            break;
        case "translationCancelled":
            hideProgress();
            document.getElementById('statusText').textContent = currentLangTexts.translationCancelled;
            document.getElementById('translateBtn').disabled = false;
            document.getElementById('translateAllBtn').disabled = false;
            break;
    }
    return true;
});
