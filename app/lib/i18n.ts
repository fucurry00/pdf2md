export type Language =
  | "ja"
  | "en"
  | "ko"
  | "zh"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "pt"
  | "ru"
  | "ar"
  | "hi";

export interface Translations {
  // Header
  title: string;
  subtitle: string;

  // Upload section
  dragDropText: string;
  dragDropSubtext: string;
  selectFileButton: string;
  dropHereText: string;

  // File info
  uploadedFile: string;
  noFile: string;
  uploading: string;

  // Analysis section
  converting: string;
  convertingSubtext: string;
  noConversionResult: string;

  // File types
  pdf: string;
  image: string;

  // Errors
  onlyPdfFiles: string;
  fileSizeExceeded: string;
  uploadError: string;
  analysisError: string;

  // Footer
  footerText: string;
}

export const translations: Record<Language, Translations> = {
  ja: {
    title: "PDF to Markdown",
    subtitle: "PDF文字起こし・OCR変換ツール",

    dragDropText: "PDFファイルをドラッグ&ドロップ",
    dragDropSubtext: "PDFファイルをドロップまたはクリックしてアップロード",
    selectFileButton: "ファイルを選択",
    dropHereText: "ここにドロップ",

    uploadedFile: "アップロードされたファイル",
    noFile: "ファイルなし",
    uploading: "アップロード中...",

    converting: "変換中...",
    convertingSubtext: "PDFをテキストに変換中",
    noConversionResult: "変換結果なし",

    pdf: "PDF",
    image: "画像",

    onlyPdfFiles: "PDFファイルのみアップロード可能です",
    fileSizeExceeded:
      "ファイルサイズが20MB制限を超えています。より小さなファイルをアップロードしてください。",
    uploadError: "アップロード中にエラーが発生しました",
    analysisError: "分析中にエラーが発生しました",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  en: {
    title: "PDF to Markdown",
    subtitle: "OCR Text Extraction Tool",

    dragDropText: "Drag & Drop PDF File",
    dragDropSubtext: "Drop or click to upload PDF file",
    selectFileButton: "Select File",
    dropHereText: "Drop here",

    uploadedFile: "Uploaded File",
    noFile: "No File",
    uploading: "Uploading...",

    converting: "Converting...",
    convertingSubtext: "Converting PDF to text",
    noConversionResult: "No Conversion Result",

    pdf: "PDF",
    image: "Image",

    onlyPdfFiles: "Only PDF files can be uploaded",
    fileSizeExceeded: "File size exceeds the 20MB limit. Please upload a smaller file.",
    uploadError: "Error during upload",
    analysisError: "Error during analysis",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  ko: {
    title: "PDF to Markdown",
    subtitle: "PDF 텍스트 추출·OCR 변환 도구",

    dragDropText: "PDF 파일을 드래그&드롭",
    dragDropSubtext: "PDF 파일을 드롭하거나 클릭하여 업로드",
    selectFileButton: "파일 선택",
    dropHereText: "여기에 드롭",

    uploadedFile: "업로드된 파일",
    noFile: "파일 없음",
    uploading: "업로드 중...",

    converting: "변환 중...",
    convertingSubtext: "PDF를 텍스트로 변환 중",
    noConversionResult: "변환 결과 없음",

    pdf: "PDF",
    image: "이미지",

    onlyPdfFiles: "PDF 파일만 업로드 가능합니다",
    fileSizeExceeded: "파일 크기가 20MB 제한을 초과했습니다. 더 작은 파일을 업로드해 주세요.",
    uploadError: "업로드 중 오류가 발생했습니다",
    analysisError: "분석 중 오류가 발생했습니다",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  zh: {
    title: "PDF to Markdown",
    subtitle: "PDF文字识别·OCR转换工具",

    dragDropText: "拖拽PDF文件",
    dragDropSubtext: "拖拽或点击上传PDF文件",
    selectFileButton: "选择文件",
    dropHereText: "拖拽到这里",

    uploadedFile: "已上传文件",
    noFile: "无文件",
    uploading: "上传中...",

    converting: "转换中...",
    convertingSubtext: "正在将PDF转换为文本",
    noConversionResult: "无转换结果",

    pdf: "PDF",
    image: "图片",

    onlyPdfFiles: "只能上传PDF文件",
    fileSizeExceeded: "文件大小超过20MB限制。请上传更小的文件。",
    uploadError: "上传时发生错误",
    analysisError: "分析时发生错误",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  de: {
    title: "PDF to Markdown",
    subtitle: "PDF-Text-Extraktion·OCR-Konvertierungstool",

    dragDropText: "PDF-Datei ziehen & ablegen",
    dragDropSubtext: "PDF-Datei ablegen oder klicken zum Hochladen",
    selectFileButton: "Datei auswählen",
    dropHereText: "Hier ablegen",

    uploadedFile: "Hochgeladene Datei",
    noFile: "Keine Datei",
    uploading: "Hochladen...",

    converting: "Konvertieren...",
    convertingSubtext: "PDF in Text konvertieren",
    noConversionResult: "Kein Konvertierungsergebnis",

    pdf: "PDF",
    image: "Bild",

    onlyPdfFiles: "Nur PDF-Dateien können hochgeladen werden",
    fileSizeExceeded:
      "Dateigröße überschreitet das 20MB-Limit. Bitte laden Sie eine kleinere Datei hoch.",
    uploadError: "Fehler beim Hochladen",
    analysisError: "Fehler bei der Analyse",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  fr: {
    title: "PDF to Markdown",
    subtitle: "Outil d'extraction de texte PDF·Conversion OCR",

    dragDropText: "Glisser-déposer le fichier PDF",
    dragDropSubtext: "Glisser-déposer ou cliquer pour télécharger le fichier PDF",
    selectFileButton: "Sélectionner le fichier",
    dropHereText: "Déposer ici",

    uploadedFile: "Fichier téléchargé",
    noFile: "Aucun fichier",
    uploading: "Téléchargement...",

    converting: "Conversion...",
    convertingSubtext: "Conversion du PDF en texte",
    noConversionResult: "Aucun résultat de conversion",

    pdf: "PDF",
    image: "Image",

    onlyPdfFiles: "Seuls les fichiers PDF peuvent être téléchargés",
    fileSizeExceeded:
      "La taille du fichier dépasse la limite de 20MB. Veuillez télécharger un fichier plus petit.",
    uploadError: "Erreur lors du téléchargement",
    analysisError: "Erreur lors de l'analyse",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  es: {
    title: "PDF to Markdown",
    subtitle: "Herramienta de extracción de texto PDF·Conversión OCR",

    dragDropText: "Arrastrar y soltar archivo PDF",
    dragDropSubtext: "Arrastrar y soltar o hacer clic para subir archivo PDF",
    selectFileButton: "Seleccionar archivo",
    dropHereText: "Soltar aquí",

    uploadedFile: "Archivo subido",
    noFile: "Sin archivo",
    uploading: "Subiendo...",

    converting: "Convirtiendo...",
    convertingSubtext: "Convirtiendo PDF a texto",
    noConversionResult: "Sin resultado de conversión",

    pdf: "PDF",
    image: "Imagen",

    onlyPdfFiles: "Solo se pueden subir archivos PDF",
    fileSizeExceeded:
      "El tamaño del archivo excede el límite de 20MB. Por favor, suba un archivo más pequeño.",
    uploadError: "Error durante la subida",
    analysisError: "Error durante el análisis",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  it: {
    title: "PDF to Markdown",
    subtitle: "Strumento di estrazione testo PDF·Conversione OCR",

    dragDropText: "Trascina e rilascia file PDF",
    dragDropSubtext: "Trascina e rilascia o clicca per caricare file PDF",
    selectFileButton: "Seleziona file",
    dropHereText: "Rilascia qui",

    uploadedFile: "File caricato",
    noFile: "Nessun file",
    uploading: "Caricamento...",

    converting: "Conversione...",
    convertingSubtext: "Conversione PDF in testo",
    noConversionResult: "Nessun risultato di conversione",

    pdf: "PDF",
    image: "Immagine",

    onlyPdfFiles: "Solo i file PDF possono essere caricati",
    fileSizeExceeded:
      "La dimensione del file supera il limite di 20MB. Si prega di caricare un file più piccolo.",
    uploadError: "Errore durante il caricamento",
    analysisError: "Errore durante l'analisi",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  pt: {
    title: "PDF to Markdown",
    subtitle: "Ferramenta de extração de texto PDF·Conversão OCR",

    dragDropText: "Arrastar e soltar arquivo PDF",
    dragDropSubtext: "Arrastar e soltar ou clicar para enviar arquivo PDF",
    selectFileButton: "Selecionar arquivo",
    dropHereText: "Soltar aqui",

    uploadedFile: "Arquivo enviado",
    noFile: "Nenhum arquivo",
    uploading: "Enviando...",

    converting: "Convertendo...",
    convertingSubtext: "Convertendo PDF para texto",
    noConversionResult: "Nenhum resultado de conversão",

    pdf: "PDF",
    image: "Imagem",

    onlyPdfFiles: "Apenas arquivos PDF podem ser enviados",
    fileSizeExceeded:
      "O tamanho do arquivo excede o limite de 20MB. Por favor, envie um arquivo menor.",
    uploadError: "Erro durante o envio",
    analysisError: "Erro durante a análise",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  ru: {
    title: "PDF to Markdown",
    subtitle: "Инструмент извлечения текста PDF·OCR конвертация",

    dragDropText: "Перетащите PDF файл",
    dragDropSubtext: "Перетащите или нажмите для загрузки PDF файла",
    selectFileButton: "Выбрать файл",
    dropHereText: "Перетащите сюда",

    uploadedFile: "Загруженный файл",
    noFile: "Нет файла",
    uploading: "Загрузка...",

    converting: "Конвертация...",
    convertingSubtext: "Конвертация PDF в текст",
    noConversionResult: "Нет результата конвертации",

    pdf: "PDF",
    image: "Изображение",

    onlyPdfFiles: "Можно загружать только PDF файлы",
    fileSizeExceeded:
      "Размер файла превышает лимит 20MB. Пожалуйста, загрузите файл меньшего размера.",
    uploadError: "Ошибка при загрузке",
    analysisError: "Ошибка при анализе",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  ar: {
    title: "PDF to Markdown",
    subtitle: "أداة استخراج النص من PDF·تحويل OCR",

    dragDropText: "اسحب وأفلت ملف PDF",
    dragDropSubtext: "اسحب وأفلت أو انقر لرفع ملف PDF",
    selectFileButton: "اختر الملف",
    dropHereText: "أفلت هنا",

    uploadedFile: "الملف المرفوع",
    noFile: "لا يوجد ملف",
    uploading: "جاري الرفع...",

    converting: "جاري التحويل...",
    convertingSubtext: "تحويل PDF إلى نص",
    noConversionResult: "لا توجد نتيجة تحويل",

    pdf: "PDF",
    image: "صورة",

    onlyPdfFiles: "يمكن رفع ملفات PDF فقط",
    fileSizeExceeded: "حجم الملف يتجاوز حد 20MB. يرجى رفع ملف أصغر.",
    uploadError: "خطأ أثناء الرفع",
    analysisError: "خطأ أثناء التحليل",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
  hi: {
    title: "PDF to Markdown",
    subtitle: "PDF टेक्स्ट निष्कर्षण·OCR रूपांतरण उपकरण",

    dragDropText: "PDF फाइल खींचें और छोड़ें",
    dragDropSubtext: "PDF फाइल अपलोड करने के लिए खींचें या क्लिक करें",
    selectFileButton: "फाइल चुनें",
    dropHereText: "यहाँ छोड़ें",

    uploadedFile: "अपलोड की गई फाइल",
    noFile: "कोई फाइल नहीं",
    uploading: "अपलोड हो रहा है...",

    converting: "रूपांतरण हो रहा है...",
    convertingSubtext: "PDF को टेक्स्ट में रूपांतरित कर रहे हैं",
    noConversionResult: "कोई रूपांतरण परिणाम नहीं",

    pdf: "PDF",
    image: "छवि",

    onlyPdfFiles: "केवल PDF फाइलें अपलोड की जा सकती हैं",
    fileSizeExceeded: "फाइल का आकार 20MB सीमा से अधिक है। कृपया छोटी फाइल अपलोड करें।",
    uploadError: "अपलोड के दौरान त्रुटि",
    analysisError: "विश्लेषण के दौरान त्रुटि",

    footerText: "© 2024 PDF2MD. All rights reserved.",
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.ja;
}

export function getLanguageFromSearchParams(searchParams: URLSearchParams): Language {
  const lang = searchParams.get("lang");
  const supportedLanguages: Language[] = [
    "ja",
    "en",
    "ko",
    "zh",
    "de",
    "fr",
    "es",
    "it",
    "pt",
    "ru",
    "ar",
    "hi",
  ];
  return supportedLanguages.includes(lang as Language) ? (lang as Language) : "ja";
}
