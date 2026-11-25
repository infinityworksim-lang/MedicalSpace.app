window.MedicalSpaceLaunch = {"en": {"downloadGooglePlay": "Get it on Google Play", "downloadApp": "Download on Google Play", "heroFootnote": "Available on Google Play for Android.", "faq5Answer": "Download MedicalSpace for Android from Google Play:"}, "ar": {"downloadGooglePlay": "حمّل التطبيق من Google Play", "downloadApp": "التنزيل من Google Play", "heroFootnote": "متاح على Google Play لأجهزة أندرويد.", "faq5Answer": "يمكن تنزيل MedicalSpace لأجهزة أندرويد من Google Play:"}, "fr": {"downloadGooglePlay": "Télécharger sur Google Play", "downloadApp": "Télécharger sur Google Play", "heroFootnote": "Disponible sur Google Play pour Android.", "faq5Answer": "Téléchargez MedicalSpace pour Android sur Google Play :"}, "tr": {"downloadGooglePlay": "Google Play’den indirin", "downloadApp": "Google Play’den indirin", "heroFootnote": "Android için Google Play’de.", "faq5Answer": "Android için MedicalSpace’i Google Play’den indirin:"}};
Object.assign(window.MedicalSpaceEnglish ||= {}, window.MedicalSpaceLaunch.en);
for (const lang of ['ar','fr','tr']) {
  window.MedicalSpaceLanguages ||= {};
  Object.assign(window.MedicalSpaceLanguages[lang] ||= {}, window.MedicalSpaceLaunch[lang]);
}
