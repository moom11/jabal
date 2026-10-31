/* الترجمة: العربية (الأصل) — English — বাংলা
 * الواجهة تُكتب بالعربية، وهذا الملف يترجم النصوص الظاهرة تلقائياً حسب اللغة المختارة.
 * سند التحميل المطبوع يبقى بالعربية لأنه نموذج الشركة الرسمي.
 */
(function () {
  'use strict';

  const LANGS = {
    ar: { name: 'العربية', dir: 'rtl' },
    en: { name: 'English', dir: 'ltr' },
    bn: { name: 'বাংলা', dir: 'ltr' },
  };
  const KEY = 'jabal-lang';

  // [عربي, English, বাংলা]
  const ROWS = [
    // ---- التنقل والعناوين
    ['الرئيسية', 'Home', 'হোম'],
    ['تسجيل تحميل', 'Register loading', 'লোডিং নিবন্ধন'],
    ['تسجيل تحميل قلاب', 'Register truck loading', 'ট্রাক লোডিং নিবন্ধন'],
    ['تسجيل تحميل القلابات', 'Truck loading register', 'ট্রাক লোডিং নিবন্ধন'],
    ['تحميل اليوم', "Today's loads", 'আজকের লোড'],
    ['العمليات', 'Operations', 'লেনদেন'],
    ['العملاء والحسابات', 'Customers & accounts', 'গ্রাহক ও হিসাব'],
    ['العملاء', 'Customers', 'গ্রাহকগণ'],
    ['سداد العملاء', 'Customer payments', 'গ্রাহকের পরিশোধ'],
    ['المصروفات', 'Expenses', 'খরচ'],
    ['القلابات والسائقين', 'Trucks & drivers', 'ট্রাক ও চালক'],
    ['التقارير', 'Reports', 'রিপোর্ট'],
    ['سجل التغييرات', 'Change log', 'পরিবর্তনের লগ'],
    ['الأصول', 'Assets', 'সম্পদ'],
    ['الإعدادات', 'Settings', 'সেটিংস'],
    ['الخروج من الحساب', 'Sign out', 'সাইন আউট'],
    ['مدير', 'Manager', 'ম্যানেজার'],
    ['موظف بوابة', 'Gate staff', 'গেট কর্মী'],
    ['مارا', 'Mara', 'মারা'],
    ['ملخص اليوم', "Today's summary", 'আজকের সারাংশ'],
    ['اللغة', 'Language', 'ভাষা'],

    // ---- الدخول
    ['أول تشغيل: أنشئ حساب المدير', 'First run: create the manager account', 'প্রথমবার: ম্যানেজার অ্যাকাউন্ট তৈরি করুন'],
    ['الاسم', 'Name', 'নাম'],
    ['اسم المستخدم', 'Username', 'ইউজারনেম'],
    ['كلمة المرور', 'Password', 'পাসওয়ার্ড'],
    ['أحرف على الأقل', 'characters minimum', 'অক্ষর সর্বনিম্ন'],
    ['6 أحرف على الأقل', 'At least 6 characters', 'কমপক্ষে ৬ অক্ষর'],
    ['دخول', 'Sign in', 'প্রবেশ করুন'],
    ['إنشاء الحساب', 'Create account', 'অ্যাকাউন্ট তৈরি করুন'],
    ['انتهت الجلسة، سجّل الدخول مرة أخرى', 'Session expired, please sign in again', 'সেশন শেষ হয়েছে, আবার প্রবেশ করুন'],
    ['تحذير للمسؤول: لم يُربط قرص التخزين الدائم (Volume) بالخادم، وستضيع البيانات عند إعادة التشغيل. أضف Volume على المسار /data قبل الاستخدام.',
      'Admin warning: no persistent storage volume is attached; data will be lost on restart. Attach a volume at /data before use.',
      'অ্যাডমিন সতর্কতা: স্থায়ী স্টোরেজ সংযুক্ত নেই, রিস্টার্টে ডেটা হারিয়ে যাবে। ব্যবহারের আগে /data এ Volume যুক্ত করুন।'],

    // ---- شاشة التحميل
    ['رقم لوحة القلاب', 'Truck plate number', 'ট্রাকের নম্বর প্লেট'],
    ['اختيار قلاب محفوظ', 'Choose a saved truck', 'সংরক্ষিত ট্রাক বাছুন'],
    ['قراءة اللوحة من صورة', 'Read plate from photo', 'ছবি থেকে প্লেট পড়ুন'],
    ['اكتب اللوحة أو اختر قلاباً محفوظاً', 'Type the plate or choose a saved truck', 'প্লেট লিখুন বা সংরক্ষিত ট্রাক বাছুন'],
    ['قلاب جديد — سيُحفظ تلقائياً عند التأكيد', 'New truck — will be saved on confirm', 'নতুন ট্রাক — নিশ্চিত করলে সংরক্ষিত হবে'],
    ['اسم السائق', 'Driver name', 'চালকের নাম'],
    ['يُحفظ مع القلاب ويمكن تغييره', 'Saved with the truck and can be changed', 'ট্রাকের সাথে সংরক্ষিত, পরিবর্তন করা যায়'],
    ['العميل', 'Customer', 'গ্রাহক'],
    ['بدون عميل (نقدي)', 'No customer (cash)', 'গ্রাহক ছাড়া (নগদ)'],
    ['جديد', 'New', 'নতুন'],
    ['نوع المادة', 'Material', 'মালামালের ধরন'],
    ['أضف المواد من الإعدادات', 'Add materials in Settings', 'সেটিংস থেকে মালামাল যোগ করুন'],
    ['سعر الرد', 'Price per trip', 'প্রতি ট্রিপের দাম'],
    ['طريقة الدفع', 'Payment method', 'পেমেন্টের ধরন'],
    ['نقد', 'Cash', 'নগদ'],
    ['تحويل', 'Transfer', 'ট্রান্সফার'],
    ['آجل', 'Credit', 'বাকি'],
    ['المبلغ المدفوع', 'Amount paid', 'পরিশোধিত টাকা'],
    ['المتبقي', 'Remaining', 'বাকি টাকা'],
    ['ملاحظات (اختياري)', 'Notes (optional)', 'মন্তব্য (ঐচ্ছিক)'],
    ['ملاحظات', 'Notes', 'মন্তব্য'],
    ['تأكيد التحميل', 'Confirm loading', 'লোডিং নিশ্চিত করুন'],
    ['جاري الحفظ...', 'Saving...', 'সংরক্ষণ হচ্ছে...'],
    ['أدخل رقم اللوحة', 'Enter the plate number', 'প্লেট নম্বর লিখুন'],
    ['اختر نوع المادة', 'Choose the material', 'মালামাল বাছুন'],
    ['أدخل سعر الرد', 'Enter the trip price', 'ট্রিপের দাম লিখুন'],
    ['المدفوع أكبر من السعر', 'Paid is more than the price', 'পরিশোধ দামের চেয়ে বেশি'],
    ['اختر العميل لأن عليه مبلغاً متبقياً', 'Choose a customer because an amount remains', 'বাকি টাকা আছে, তাই গ্রাহক বাছুন'],
    ['تم تسجيل التحميل', 'Loading registered', 'লোডিং নিবন্ধিত হয়েছে'],
    ['سند تحميل رقم', 'Loading voucher no.', 'লোডিং ভাউচার নং'],
    ['طباعة السند', 'Print voucher', 'ভাউচার প্রিন্ট'],
    ['تحميل جديد', 'New loading', 'নতুন লোডিং'],
    ['تنبيه: لوحة مكررة', 'Warning: repeated plate', 'সতর্কতা: একই প্লেট আবার'],
    ['هل أنت متأكد أن هذا تحميل جديد لنفس القلاب؟', 'Are you sure this is a new load for the same truck?', 'আপনি কি নিশ্চিত এটি একই ট্রাকের নতুন লোড?'],
    ['نعم، سجّل التحميل', 'Yes, register loading', 'হ্যাঁ, লোডিং নিবন্ধন করুন'],
    ['جاري تحميل أداة القراءة...', 'Loading the reader...', 'রিডার লোড হচ্ছে...'],
    ['جاري قراءة اللوحة...', 'Reading the plate...', 'প্লেট পড়া হচ্ছে...'],
    ['تم استخراج اللوحة — تأكد منها', 'Plate read — please check it', 'প্লেট পড়া হয়েছে — যাচাই করুন'],
    ['لم يتم التعرف على اللوحة، اكتبها يدوياً', 'Plate not recognized, type it manually', 'প্লেট চেনা যায়নি, হাতে লিখুন'],
    ['تعذرت قراءة الصورة (تحتاج إنترنت). اكتب اللوحة يدوياً', 'Could not read the photo (needs internet). Type the plate', 'ছবি পড়া যায়নি (ইন্টারনেট লাগবে)। প্লেট হাতে লিখুন'],
    ['بحث باللوحة أو السائق...', 'Search by plate or driver...', 'প্লেট বা চালক দিয়ে খুঁজুন...'],
    ['لا توجد قلابات مطابقة', 'No matching trucks', 'মিলে এমন ট্রাক নেই'],
    ['عميل جديد', 'New customer', 'নতুন গ্রাহক'],
    ['اسم العميل', 'Customer name', 'গ্রাহকের নাম'],
    ['الجوال', 'Mobile', 'মোবাইল'],
    ['تم حفظ العميل', 'Customer saved', 'গ্রাহক সংরক্ষিত'],

    // ---- تحميل اليوم
    ['عدد الردود اليوم', 'Trips today', 'আজকের ট্রিপ'],
    ['بحث باللوحة أو رقم السند...', 'Search by plate or voucher no...', 'প্লেট বা ভাউচার নম্বর দিয়ে খুঁজুন...'],
    ['لا توجد عمليات', 'No operations', 'কোনো লেনদেন নেই'],
    ['ملغي', 'Cancelled', 'বাতিল'],
    ['نقدي', 'Cash customer', 'নগদ গ্রাহক'],

    // ---- عام
    ['حفظ', 'Save', 'সংরক্ষণ'],
    ['إلغاء', 'Cancel', 'বাতিল'],
    ['رجوع', 'Back', 'ফিরে যান'],
    ['إغلاق', 'Close', 'বন্ধ'],
    ['تأكيد', 'Confirm', 'নিশ্চিত'],
    ['تعديل', 'Edit', 'সম্পাদনা'],
    ['طباعة', 'Print', 'প্রিন্ট'],
    ['بحث', 'Search', 'খুঁজুন'],
    ['عرض', 'Show', 'দেখুন'],
    ['الكل', 'All', 'সব'],
    ['من', 'From', 'থেকে'],
    ['إلى', 'To', 'পর্যন্ত'],
    ['اختر', 'Choose', 'বাছুন'],
    ['تم الحفظ', 'Saved', 'সংরক্ষিত'],
    ['حدث خطأ', 'An error occurred', 'একটি ত্রুটি হয়েছে'],
    ['تعذر الاتصال بالخادم. تأكد من الاتصال بالشبكة وحاول مرة أخرى', 'Cannot reach the server. Check the network and try again', 'সার্ভারে সংযোগ হচ্ছে না। নেটওয়ার্ক দেখে আবার চেষ্টা করুন'],
    ['تعذر التنزيل', 'Download failed', 'ডাউনলোড ব্যর্থ'],
    ['اختر «حفظ بتنسيق PDF» من نافذة الطباعة', 'Choose "Save as PDF" in the print window', 'প্রিন্ট উইন্ডো থেকে "Save as PDF" বাছুন'],
    ['السبب مطلوب', 'A reason is required', 'কারণ লিখতে হবে'],
    ['سبب الإلغاء', 'Reason for cancelling', 'বাতিলের কারণ'],
    ['سبب التعديل', 'Reason for the edit', 'সম্পাদনার কারণ'],
    ['اكتب سبب التعديل', 'Write the reason for the edit', 'সম্পাদনার কারণ লিখুন'],
    ['يُحفظ في سجل التغييرات', 'Saved in the change log', 'পরিবর্তনের লগে সংরক্ষিত'],
    ['الحالة', 'Status', 'অবস্থা'],
    ['نشط', 'Active', 'সক্রিয়'],
    ['نشطة', 'Active', 'সক্রিয়'],
    ['موقوف', 'Disabled', 'বন্ধ'],
    ['موقوفة', 'Disabled', 'বন্ধ'],
    ['سارية', 'Valid', 'বৈধ'],
    ['ملغاة', 'Cancelled', 'বাতিল'],
    ['الإجمالي', 'Total', 'মোট'],
    ['التاريخ', 'Date', 'তারিখ'],
    ['الوقت', 'Time', 'সময়'],
    ['رقم', 'No.', 'নং'],
    ['المبلغ', 'Amount', 'টাকা'],
    ['الطريقة', 'Method', 'পদ্ধতি'],
    ['الموظف', 'Staff', 'কর্মী'],
    ['التفاصيل', 'Details', 'বিস্তারিত'],
    ['العملية', 'Action', 'কাজ'],
    ['المستخدم', 'User', 'ব্যবহারকারী'],
    ['لا توجد بيانات', 'No data', 'কোনো তথ্য নেই'],
    ['طُبع', 'Printed', 'প্রিন্টের সময়'],
    ['هذا الشهر', 'This month', 'এই মাস'],
    ['هذه السنة', 'This year', 'এই বছর'],
    ['آخر 7 أيام', 'Last 7 days', 'শেষ ৭ দিন'],
    ['اليوم', 'Today', 'আজ'],
    ['من البداية', 'From the start', 'শুরু থেকে'],
    ['حتى الآن', 'Until now', 'এখন পর্যন্ত'],

    // ---- الأعمدة والإحصائيات
    ['السند', 'Voucher', 'ভাউচার'],
    ['رقم السند', 'Voucher no.', 'ভাউচার নং'],
    ['اللوحة', 'Plate', 'প্লেট'],
    ['رقم اللوحة', 'Plate number', 'প্লেট নম্বর'],
    ['السائق', 'Driver', 'চালক'],
    ['المادة', 'Material', 'মালামাল'],
    ['السعر', 'Price', 'দাম'],
    ['المدفوع', 'Paid', 'পরিশোধিত'],
    ['الدفع', 'Payment', 'পেমেন্ট'],
    ['الردود', 'Trips', 'ট্রিপ'],
    ['عدد الردود', 'Number of trips', 'ট্রিপের সংখ্যা'],
    ['المبيعات', 'Sales', 'বিক্রি'],
    ['التحصيل النقدي', 'Cash collected', 'নগদ আদায়'],
    ['التحويلات', 'Transfers', 'ট্রান্সফার'],
    ['آجل اليوم', 'Credit today', 'আজকের বাকি'],
    ['آجل من ردود الفترة', 'Credit from period trips', 'এই সময়ের ট্রিপের বাকি'],
    ['إجمالي أرصدة العملاء', 'Total customer balances', 'গ্রাহকদের মোট বাকি'],
    ['الأرصدة المتبقية', 'Outstanding balances', 'বাকি ব্যালেন্স'],
    ['مصروفات اليوم', "Today's expenses", 'আজকের খরচ'],
    ['صافي اليوم', 'Net today', 'আজকের নিট'],
    ['صافي الربح', 'Net profit', 'নিট লাভ'],
    ['صافي النقد', 'Net cash', 'নিট নগদ'],
    ['عمليات ملغاة اليوم', 'Cancelled today', 'আজ বাতিল'],
    ['حسب المادة', 'By material', 'মালামাল অনুযায়ী'],
    ['حسب نوع المادة', 'By material', 'মালামাল অনুযায়ী'],
    ['حسب العميل', 'By customer', 'গ্রাহক অনুযায়ী'],
    ['حسب اللوحة', 'By plate', 'প্লেট অনুযায়ী'],
    ['حسب اليوم', 'By day', 'দিন অনুযায়ী'],
    ['حسب البند', 'By category', 'খাত অনুযায়ী'],
    ['أكثر القلابات اليوم', 'Top trucks today', 'আজকের শীর্ষ ট্রাক'],
    ['آخر العمليات', 'Latest operations', 'সর্বশেষ লেনদেন'],
    ['نقد عند التحميل', 'Cash at loading', 'লোডিংয়ে নগদ'],
    ['تحويل عند التحميل', 'Transfer at loading', 'লোডিংয়ে ট্রান্সফার'],
    ['المدفوع عند التحميل', 'Paid at loading', 'লোডিংয়ে পরিশোধ'],
    ['سدادات نقد', 'Cash payments', 'নগদ পরিশোধ'],
    ['سدادات تحويل', 'Transfer payments', 'ট্রান্সফার পরিশোধ'],
    ['مصروفات نقد', 'Cash expenses', 'নগদ খরচ'],
    ['مصروفات تحويل', 'Transfer expenses', 'ট্রান্সফার খরচ'],
    ['السدادات', 'Payments', 'পরিশোধ'],
    ['متبقي', 'Remaining', 'বাকি'],

    // ---- العمليات
    ['رقم سند، لوحة، سائق، عميل', 'Voucher no., plate, driver, customer', 'ভাউচার নং, প্লেট, চালক, গ্রাহক'],
    ['تم حفظ التعديل', 'Changes saved', 'পরিবর্তন সংরক্ষিত'],
    ['تم إلغاء العملية', 'Operation cancelled', 'লেনদেন বাতিল হয়েছে'],
    ['سجل تغييرات العملية', 'Operation history', 'লেনদেনের ইতিহাস'],
    ['لا يوجد سجل', 'No history', 'কোনো ইতিহাস নেই'],
    ['السبب', 'Reason', 'কারণ'],

    // ---- العملاء والسداد
    ['عدد العملاء', 'Customers', 'গ্রাহক সংখ্যা'],
    ['إجمالي المتبقي على العملاء', 'Total owed by customers', 'গ্রাহকদের মোট বাকি'],
    ['بحث بالاسم أو الجوال...', 'Search by name or mobile...', 'নাম বা মোবাইল দিয়ে খুঁজুন...'],
    ['الرصيد المتبقي', 'Balance', 'বাকি ব্যালেন্স'],
    ['كشف حساب', 'Statement', 'হিসাব বিবরণী'],
    ['سداد', 'Payment', 'পরিশোধ'],
    ['لا يوجد عملاء', 'No customers', 'কোনো গ্রাহক নেই'],
    ['تعديل عميل', 'Edit customer', 'গ্রাহক সম্পাদনা'],
    ['تسجيل سداد', 'Record payment', 'পরিশোধ নিবন্ধন'],
    ['تسجيل سداد من عميل', 'Record a customer payment', 'গ্রাহকের পরিশোধ নিবন্ধন'],
    ['الرصيد الحالي', 'Current balance', 'বর্তমান ব্যালেন্স'],
    ['السداد يخصم من رصيد العميل ولا يُحسب مبيعات جديدة.', 'A payment reduces the customer balance and is not counted as a sale.', 'পরিশোধ গ্রাহকের বাকি কমায়, নতুন বিক্রি হিসেবে গণ্য হয় না।'],
    ['أدخل المبلغ', 'Enter the amount', 'টাকার পরিমাণ লিখুন'],
    ['اختر العميل', 'Choose the customer', 'গ্রাহক বাছুন'],
    ['تم تسجيل السداد', 'Payment recorded', 'পরিশোধ নিবন্ধিত'],
    ['تم إلغاء السداد', 'Payment cancelled', 'পরিশোধ বাতিল'],
    ['إلغاء سداد', 'Cancel payment', 'পরিশোধ বাতিল'],
    ['لا توجد سدادات', 'No payments', 'কোনো পরিশোধ নেই'],
    ['المبيعات', 'Sales', 'বিক্রি'],
    ['البيان', 'Description', 'বিবরণ'],
    ['الرصيد', 'Balance', 'ব্যালেন্স'],
    ['رصيد سابق', 'Opening balance', 'পূর্বের ব্যালেন্স'],
    ['لا توجد حركات', 'No transactions', 'কোনো লেনদেন নেই'],

    // ---- المصروفات
    ['مصروف جديد', 'New expense', 'নতুন খরচ'],
    ['البند', 'Category', 'খাত'],
    ['إجمالي المصروفات', 'Total expenses', 'মোট খরচ'],
    ['المصروفات حسب البند', 'Expenses by category', 'খাত অনুযায়ী খরচ'],
    ['الأصل', 'Asset', 'সম্পদ'],
    ['الأصل / المعدة (اختياري)', 'Asset / equipment (optional)', 'সম্পদ / যন্ত্র (ঐচ্ছিক)'],
    ['مصروف عام', 'General expense', 'সাধারণ খরচ'],
    ['تُعدّل البنود من الإعدادات', 'Categories are edited in Settings', 'খাতগুলো সেটিংস থেকে পরিবর্তন করুন'],
    ['اختر بند المصروف', 'Choose the expense category', 'খরচের খাত বাছুন'],
    ['أدخل مبلغ المصروف', 'Enter the expense amount', 'খরচের পরিমাণ লিখুন'],
    ['تم حفظ المصروف', 'Expense saved', 'খরচ সংরক্ষিত'],
    ['تم إلغاء المصروف', 'Expense cancelled', 'খরচ বাতিল'],
    ['إلغاء مصروف', 'Cancel expense', 'খরচ বাতিল'],
    ['لا توجد مصروفات', 'No expenses', 'কোনো খরচ নেই'],
    ['المصروفات لا تظهر عند التصفية باللوحة أو العميل أو المادة', 'Expenses are hidden when filtering by plate, customer or material', 'প্লেট, গ্রাহক বা মালামাল দিয়ে ফিল্টার করলে খরচ দেখায় না'],
    ['ديزل / وقود', 'Diesel / fuel', 'ডিজেল / জ্বালানি'],
    ['رواتب وأجور', 'Salaries & wages', 'বেতন ও মজুরি'],
    ['صيانة وقطع غيار', 'Maintenance & parts', 'মেরামত ও যন্ত্রাংশ'],
    ['إيجار معدات', 'Equipment rental', 'যন্ত্র ভাড়া'],
    ['رسوم وتصاريح', 'Fees & permits', 'ফি ও অনুমতি'],
    ['أخرى', 'Other', 'অন্যান্য'],

    // ---- القلابات
    ['قلاب جديد', 'New truck', 'নতুন ট্রাক'],
    ['جوال السائق', 'Driver mobile', 'চালকের মোবাইল'],
    ['النوع', 'Type', 'ধরন'],
    ['آخر تحميل', 'Last loading', 'শেষ লোডিং'],
    ['كشف', 'Report', 'রিপোর্ট'],
    ['نوع القلاب', 'Truck type', 'ট্রাকের ধরন'],
    ['سكس، تريلا...', 'Six-wheeler, trailer...', 'ছয় চাকা, ট্রেলার...'],
    ['لا توجد قلابات. تُسجل تلقائياً عند أول تحميل', 'No trucks yet. They are saved automatically on first loading', 'এখনো ট্রাক নেই। প্রথম লোডিংয়ে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়'],
    ['تم حفظ', 'Saved', 'সংরক্ষিত'],
    ['سكس', 'Six-wheeler', 'ছয় চাকা'],
    ['تريلا', 'Trailer', 'ট্রেলার'],
    ['قلاب 10 ويل', '10-wheel truck', '১০ চাকার ট্রাক'],
    ['قلاب 12 ويل', '12-wheel truck', '১২ চাকার ট্রাক'],
    ['دينا', 'Dyna (small truck)', 'ডাইনা (ছোট ট্রাক)'],
    ['لوري', 'Lorry', 'লরি'],

    // ---- المواد الافتراضية
    ['دفان', 'Fill (Dafan)', 'দাফান (ভরাট মাটি)'],
    ['سبيس', 'Subbase (Sabis)', 'সাবিস (সাববেস)'],

    // ---- التقارير
    ['تقرير المبيعات', 'Sales report', 'বিক্রির রিপোর্ট'],
    ['الفترة', 'Period', 'সময়কাল'],
    ['تفاصيل الردود', 'Trip details', 'ট্রিপের বিস্তারিত'],
    ['لا توجد ردود', 'No trips', 'কোনো ট্রিপ নেই'],
    ['لا توجد أرصدة متبقية', 'No outstanding balances', 'কোনো বাকি নেই'],
    ['السدادات لا تظهر عند التصفية باللوحة أو المادة', 'Payments are hidden when filtering by plate or material', 'প্লেট বা মালামাল দিয়ে ফিল্টার করলে পরিশোধ দেখায় না'],
    ['نقدي (بدون عميل)', 'Cash (no customer)', 'নগদ (গ্রাহক ছাড়া)'],

    // ---- السجل
    ['بحث (رقم سند، مستخدم، سبب...)', 'Search (voucher no., user, reason...)', 'খুঁজুন (ভাউচার নং, ব্যবহারকারী, কারণ...)'],
    ['إضافة', 'Add', 'যোগ'],
    ['إلغاء سند', 'Cancel voucher', 'ভাউচার বাতিল'],
    ['مصروف', 'Expense', 'খরচ'],
    ['نسخ احتياطي', 'Backup', 'ব্যাকআপ'],
    ['إنشاء', 'Create', 'তৈরি'],

    // ---- الأصول
    ['تسجيل أصل', 'Register asset', 'সম্পদ নিবন্ধন'],
    ['تعديل أصل', 'Edit asset', 'সম্পদ সম্পাদনা'],
    ['عدد الأصول', 'Assets', 'সম্পদের সংখ্যা'],
    ['قيمة الشراء', 'Purchase cost', 'ক্রয়মূল্য'],
    ['القيمة الدفترية', 'Book value', 'বর্তমান মূল্য'],
    ['اسم الأصل', 'Asset name', 'সম্পদের নাম'],
    ['اللوحة / التسلسلي', 'Plate / serial', 'প্লেট / সিরিয়াল'],
    ['اللوحة / الرقم التسلسلي', 'Plate / serial number', 'প্লেট / সিরিয়াল নম্বর'],
    ['تاريخ الشراء', 'Purchase date', 'ক্রয়ের তারিখ'],
    ['الإهلاك السنوي', 'Yearly depreciation', 'বার্ষিক অবচয়'],
    ['مجمع الإهلاك', 'Accumulated depreciation', 'মোট অবচয়'],
    ['العمر الإنتاجي (سنوات)', 'Useful life (years)', 'ব্যবহারযোগ্য আয়ু (বছর)'],
    ['القيمة المتبقية (الخردة)', 'Salvage value', 'অবশিষ্ট মূল্য'],
    ['الموقع / المسؤول', 'Location / person in charge', 'অবস্থান / দায়িত্বপ্রাপ্ত'],
    ['مثال: شيول كاتربيلر 950', 'e.g. Caterpillar 950 loader', 'যেমন: ক্যাটারপিলার ৯৫০ লোডার'],
    ['لم تُسجل أصول بعد', 'No assets yet', 'এখনো কোনো সম্পদ নেই'],
    ['سجل الأصول', 'Asset register', 'সম্পদের তালিকা'],
    ['الإهلاك بطريقة القسط الثابت: (قيمة الشراء − القيمة المتبقية) ÷ العمر الإنتاجي.', 'Straight-line depreciation: (cost − salvage) ÷ useful life.', 'সরলরৈখিক অবচয়: (ক্রয়মূল্য − অবশিষ্ট মূল্য) ÷ আয়ু।'],
    ['يعمل', 'Working', 'চালু'],
    ['في الصيانة', 'In maintenance', 'মেরামতে'],
    ['متوقف', 'Stopped', 'বন্ধ'],
    ['مباع', 'Sold', 'বিক্রি হয়েছে'],
    ['شيول', 'Loader', 'লোডার'],
    ['حفار', 'Excavator', 'এক্সকাভেটর'],
    ['قلاب', 'Dump truck', 'ডাম্প ট্রাক'],
    ['بلدوزر', 'Bulldozer', 'বুলডোজার'],
    ['كسارة', 'Crusher', 'ক্রাশার'],
    ['مولد كهرباء', 'Generator', 'জেনারেটর'],
    ['سيارة', 'Car', 'গাড়ি'],
    ['أرض / موقع', 'Land / site', 'জমি / সাইট'],
    ['مبنى / مكتب', 'Building / office', 'ভবন / অফিস'],

    // ---- الإعدادات
    ['بيانات الشركة والسند', 'Company & voucher details', 'কোম্পানি ও ভাউচারের তথ্য'],
    ['اسم الشركة', 'Company name', 'কোম্পানির নাম'],
    ['المدينة', 'City', 'শহর'],
    ['الهاتف', 'Phone', 'ফোন'],
    ['العملة', 'Currency', 'মুদ্রা'],
    ['العنوان الفرعي للسند', 'Voucher subtitle', 'ভাউচারের উপশিরোনাম'],
    ['حجم السند', 'Voucher size', 'ভাউচারের আকার'],
    ['طابعة إيصالات 80 ملم', '80 mm receipt printer', '৮০ মিমি রসিদ প্রিন্টার'],
    ['A5 (نموذج الشركة)', 'A5 (company form)', 'A5 (কোম্পানির ফর্ম)'],
    ['تنبيه تكرار اللوحة خلال (دقيقة)', 'Repeated plate warning within (minutes)', 'একই প্লেট সতর্কতা (মিনিটের মধ্যে)'],
    ['0 = إيقاف التنبيه', '0 = warning off', '০ = সতর্কতা বন্ধ'],
    ['بنود المصروفات (بند في كل سطر)', 'Expense categories (one per line)', 'খরচের খাত (প্রতি লাইনে একটি)'],
    ['الشعار', 'Logo', 'লোগো'],
    ['تغيير الشعار', 'Change logo', 'লোগো পরিবর্তন'],
    ['الشعار الافتراضي', 'Default logo', 'ডিফল্ট লোগো'],
    ['حفظ الإعدادات', 'Save settings', 'সেটিংস সংরক্ষণ'],
    ['معاينة السند', 'Preview voucher', 'ভাউচার প্রিভিউ'],
    ['تم حفظ الإعدادات', 'Settings saved', 'সেটিংস সংরক্ষিত'],
    ['تم تغيير الشعار', 'Logo changed', 'লোগো পরিবর্তিত'],
    ['حجم الشعار كبير (الحد 1.4 ميجا)', 'Logo too large (max 1.4 MB)', 'লোগো খুব বড় (সর্বোচ্চ ১.৪ MB)'],
    ['أنواع المواد', 'Material types', 'মালামালের ধরন'],
    ['مادة', 'Material', 'মালামাল'],
    ['مادة جديدة', 'New material', 'নতুন মালামাল'],
    ['تعديل مادة', 'Edit material', 'মালামাল সম্পাদনা'],
    ['اسم المادة', 'Material name', 'মালামালের নাম'],
    ['موقوفة (لا تظهر في شاشة التحميل)', 'Disabled (hidden on the loading screen)', 'বন্ধ (লোডিং স্ক্রিনে দেখাবে না)'],
    ['تغيير اسم المادة لا يغير السندات السابقة.', 'Renaming a material does not change past vouchers.', 'মালামালের নাম বদলালে আগের ভাউচার বদলায় না।'],
    ['المستخدمين والصلاحيات', 'Users & permissions', 'ব্যবহারকারী ও অনুমতি'],
    ['مستخدم', 'User', 'ব্যবহারকারী'],
    ['مستخدم جديد', 'New user', 'নতুন ব্যবহারকারী'],
    ['تعديل مستخدم', 'Edit user', 'ব্যবহারকারী সম্পাদনা'],
    ['اسم المستخدم (للدخول)', 'Username (for sign in)', 'ইউজারনেম (প্রবেশের জন্য)'],
    ['كلمة مرور جديدة (اتركها فارغة لعدم التغيير)', 'New password (leave empty to keep)', 'নতুন পাসওয়ার্ড (না বদলাতে খালি রাখুন)'],
    ['الصلاحية', 'Role', 'ভূমিকা'],
    ['موظف بوابة (تسجيل فقط)', 'Gate staff (registration only)', 'গেট কর্মী (শুধু নিবন্ধন)'],
    ['مدير (تقارير وتعديل وإلغاء)', 'Manager (reports, edit, cancel)', 'ম্যানেজার (রিপোর্ট, সম্পাদনা, বাতিল)'],
    ['موظف البوابة: تسجيل التحميل وطباعة سندات اليوم فقط. المدير: كل الصلاحيات (التقارير، التعديل، الإلغاء، الإعدادات).',
      "Gate staff: register loadings and print today's vouchers only. Manager: everything (reports, edits, cancels, settings).",
      'গেট কর্মী: শুধু লোডিং নিবন্ধন ও আজকের ভাউচার প্রিন্ট। ম্যানেজার: সব (রিপোর্ট, সম্পাদনা, বাতিল, সেটিংস)।'],
    ['النسخ الاحتياطي', 'Backup', 'ব্যাকআপ'],
    ['البيانات محفوظة في قاعدة بيانات دائمة على الخادم. للاحتياط، نزّل نسخة بشكل دوري واحفظها في مكان آخر.',
      'Data is stored in a permanent database on the server. Download a backup regularly and keep it elsewhere.',
      'ডেটা সার্ভারের স্থায়ী ডাটাবেসে সংরক্ষিত। নিয়মিত ব্যাকআপ ডাউনলোড করে অন্য জায়গায় রাখুন।'],
    ['تنزيل نسخة احتياطية', 'Download backup', 'ব্যাকআপ ডাউনলোড'],

    // ---- رسائل الخادم
    ['أدخل اسم الأصل', 'Enter the asset name', 'সম্পদের নাম লিখুন'],
    ['أدخل اسم العميل', 'Enter the customer name', 'গ্রাহকের নাম লিখুন'],
    ['أدخل اسم المادة', 'Enter the material name', 'মালামালের নাম লিখুন'],
    ['أدخل الاسم واسم المستخدم', 'Enter the name and username', 'নাম ও ইউজারনেম লিখুন'],
    ['أدخل مبلغ الدفعة', 'Enter the payment amount', 'পরিশোধের পরিমাণ লিখুন'],
    ['اختر طريقة الدفع', 'Choose the payment method', 'পেমেন্টের ধরন বাছুন'],
    ['اسم المستخدم أو كلمة المرور غير صحيحة', 'Wrong username or password', 'ইউজারনেম বা পাসওয়ার্ড ভুল'],
    ['اسم المستخدم مستخدم مسبقاً', 'Username already taken', 'ইউজারনেম আগে থেকেই আছে'],
    ['اكتب سبب الإلغاء', 'Write the reason for cancelling', 'বাতিলের কারণ লিখুন'],
    ['الأصل غير موجود', 'Asset not found', 'সম্পদ পাওয়া যায়নি'],
    ['الدفعة غير موجودة', 'Payment not found', 'পরিশোধ পাওয়া যায়নি'],
    ['الدفعة ملغاة مسبقاً', 'Payment already cancelled', 'পরিশোধ আগেই বাতিল'],
    ['العملية غير موجودة', 'Operation not found', 'লেনদেন পাওয়া যায়নি'],
    ['العملية ملغاة مسبقاً', 'Operation already cancelled', 'লেনদেন আগেই বাতিল'],
    ['العميل غير موجود', 'Customer not found', 'গ্রাহক পাওয়া যায়নি'],
    ['القلاب غير موجود', 'Truck not found', 'ট্রাক পাওয়া যায়নি'],
    ['المادة غير موجودة', 'Material not found', 'মালামাল পাওয়া যায়নি'],
    ['المادة موجودة مسبقاً', 'Material already exists', 'মালামাল আগে থেকেই আছে'],
    ['المبلغ المدفوع أكبر من سعر الرد', 'Paid amount is more than the trip price', 'পরিশোধ ট্রিপের দামের চেয়ে বেশি'],
    ['المبلغ المدفوع غير صحيح', 'Invalid paid amount', 'পরিশোধের পরিমাণ সঠিক নয়'],
    ['المستخدم غير موجود', 'User not found', 'ব্যবহারকারী পাওয়া যায়নি'],
    ['المصروف غير موجود', 'Expense not found', 'খরচ পাওয়া যায়নি'],
    ['المصروف ملغى مسبقاً', 'Expense already cancelled', 'খরচ আগেই বাতিল'],
    ['الملف كبير جداً', 'File too large', 'ফাইল খুব বড়'],
    ['تم الإعداد مسبقاً', 'Already set up', 'আগেই সেটআপ হয়েছে'],
    ['حدث خطأ في الخادم', 'Server error', 'সার্ভারে ত্রুটি'],
    ['صيغة الشعار غير مدعومة', 'Unsupported logo format', 'লোগোর ফরম্যাট সমর্থিত নয়'],
    ['غير مسموح', 'Not allowed', 'অনুমতি নেই'],
    ['غير موجود', 'Not found', 'পাওয়া যায়নি'],
    ['كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'Password must be at least 6 characters', 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে'],
    ['لا يمكن تعديل عملية ملغاة', 'A cancelled operation cannot be edited', 'বাতিল লেনদেন সম্পাদনা করা যায় না'],
    ['لا يمكنك إيقاف حسابك أو تغيير صلاحيته', 'You cannot disable your own account or change its role', 'নিজের অ্যাকাউন্ট বন্ধ বা ভূমিকা বদলানো যায় না'],
    ['محاولات كثيرة، حاول بعد 15 دقيقة', 'Too many attempts, try again in 15 minutes', 'অনেকবার চেষ্টা, ১৫ মিনিট পর আবার চেষ্টা করুন'],
    ['هذه العملية للمدير فقط', 'Managers only', 'শুধু ম্যানেজারের জন্য'],
    ['هذه اللوحة مسجلة لقلاب آخر', 'This plate belongs to another truck', 'এই প্লেট অন্য ট্রাকের'],
    ['هذه اللوحة مسجلة مسبقاً', 'This plate is already registered', 'এই প্লেট আগে থেকেই নিবন্ধিত'],
    ['يوجد عميل بنفس الاسم', 'A customer with this name exists', 'এই নামে গ্রাহক আছে'],
  ];

  const IDX = { en: 1, bn: 2 };
  const DICT = new Map(ROWS.map((r) => [r[0], r]));

  let lang = 'ar';
  try { lang = localStorage.getItem(KEY) || 'ar'; } catch (_) { /* ignore */ }
  if (!LANGS[lang]) lang = 'ar';

  const word = (ar) => {
    const row = DICT.get(ar);
    return row ? row[IDX[lang]] : null;
  };
  const money = (m) => ({ en: `${m} SAR`, bn: `${m} রিয়াল` }[lang]);

  // نصوص فيها أرقام أو أسماء متغيرة
  const PATTERNS = [
    [/^(-?[\d,]+(?:\.\d+)?) ريال$/, (m) => money(m[1])],
    [/^اللوحة (.+) سُجل لها تحميل قبل (\d+) دقيقة \(سند رقم (\d+)\)$/, (m) => ({
      en: `Plate ${m[1]} was loaded ${m[2]} min ago (voucher ${m[3]})`,
      bn: `প্লেট ${m[1]} ${m[2]} মিনিট আগে লোড হয়েছে (ভাউচার ${m[3]})`,
    }[lang])],
    [/^قلاب محفوظ(?: — (.+))?$/, (m) => ({ en: 'Saved truck', bn: 'সংরক্ষিত ট্রাক' }[lang]) + (m[1] ? ` — ${tr(m[1]) || m[1]}` : '')],
    [/^جاري القراءة (\d+)%$/, (m) => ({ en: `Reading ${m[1]}%`, bn: `পড়া হচ্ছে ${m[1]}%` }[lang])],
    [/^متبقي على (.+): (.+)$/, (m) => ({ en: `Remaining on ${m[1]}: `, bn: `${m[1]}-এর বাকি: ` }[lang]) + (tr(m[2]) || m[2])],
    [/^متبقي (.+)$/, (m) => ({ en: 'Remaining ', bn: 'বাকি ' }[lang]) + (tr(m[1]) || m[1])],
    [/^ملغي: (.*)$/, (m) => ({ en: 'Cancelled: ', bn: 'বাতিল: ' }[lang]) + m[1]],
    [/^سند (\d+)$/, (m) => ({ en: `Voucher ${m[1]}`, bn: `ভাউচার ${m[1]}` }[lang])],
    [/^سداد (\d+)$/, (m) => ({ en: `Payment ${m[1]}`, bn: `পরিশোধ ${m[1]}` }[lang])],
    [/^سداد — (.*)$/, (m) => ({ en: 'Payment — ', bn: 'পরিশোধ — ' }[lang]) + m[1]],
    [/^رد — (.+?) — لوحة (.+)$/, (m) => ({ en: 'Trip — ', bn: 'ট্রিপ — ' }[lang]) + (tr(m[1]) || m[1]) + ({ en: ' — plate ', bn: ' — প্লেট ' }[lang]) + m[2]],
    [/^كشف حساب: (.+)$/, (m) => ({ en: 'Statement: ', bn: 'হিসাব বিবরণী: ' }[lang]) + m[1]],
    [/^تعديل سند (\d+)$/, (m) => ({ en: `Edit voucher ${m[1]}`, bn: `ভাউচার ${m[1]} সম্পাদনা` }[lang])],
    [/^إلغاء سند (\d+) — (.+)$/, (m) => ({ en: `Cancel voucher ${m[1]} — `, bn: `ভাউচার ${m[1]} বাতিল — ` }[lang]) + m[2]],
    [/^تعديل قلاب (.+)$/, (m) => ({ en: 'Edit truck ', bn: 'ট্রাক সম্পাদনা ' }[lang]) + m[1]],
    [/^تعديل مستخدم: (.+)$/, (m) => ({ en: 'Edit user: ', bn: 'ব্যবহারকারী সম্পাদনা: ' }[lang]) + m[1]],
    [/^أرصدة العملاء المتبقية \(حتى (.+)\)$/, (m) => ({ en: `Outstanding customer balances (until ${m[1]})`, bn: `গ্রাহকদের বাকি ব্যালেন্স (${m[1]} পর্যন্ত)` }[lang])],
    [/^(\d{4}-\d{2}-\d{2}) إلى (\d{4}-\d{2}-\d{2})(.*)$/, (m) => `${m[1]} ${({ en: 'to', bn: 'থেকে' }[lang])} ${m[2]}${m[3]}`],
    [/^التحصيل يشمل سدادات العملاء اليوم: نقد (.+) · تحويل (.+)$/, (m) => ({
      en: `Includes customer payments today: cash ${tr(m[1]) || m[1]} · transfer ${tr(m[2]) || m[2]}`,
      bn: `আজকের গ্রাহক পরিশোধ সহ: নগদ ${tr(m[1]) || m[1]} · ট্রান্সফার ${tr(m[2]) || m[2]}`,
    }[lang])],
  ];

  // ترجمة نص كامل (مع الحفاظ على الرموز والمسافات حوله)
  function tr(text) {
    if (lang === 'ar' || !text || !/[؀-ۿ]/.test(text)) return null;
    const trimmed = text.trim();
    let out = word(trimmed);
    if (out) return text.replace(trimmed, out);
    const m = trimmed.match(/^([^\p{L}\p{N}]*)([\s\S]*?)([^\p{L}\p{N})]*)$/u);
    if (m && m[2]) {
      out = word(m[2]);
      if (!out) for (const [re, fn] of PATTERNS) { const pm = m[2].match(re); if (pm) { out = fn(pm); break; } }
      if (!out) for (const [re, fn] of PATTERNS) { const pm = trimmed.match(re); if (pm) { out = fn(pm); return text.replace(trimmed, out); } }
      if (out) return text.replace(trimmed, m[1] + out + m[3]);
    }
    return null;
  }

  const SKIP = (el) => !el || el.closest('script, style, .voucher, [data-no-tr]');

  function translateNode(node) {
    if (lang === 'ar') return;
    if (node.nodeType === 3) {
      if (SKIP(node.parentElement)) return;
      const t = tr(node.nodeValue);
      if (t !== null && t !== node.nodeValue) node.nodeValue = t;
      return;
    }
    if (node.nodeType !== 1 || SKIP(node)) return;
    for (const attr of ['placeholder', 'title', 'aria-label']) {
      if (node.hasAttribute && node.hasAttribute(attr)) {
        const t = tr(node.getAttribute(attr));
        if (t !== null) node.setAttribute(attr, t);
      }
    }
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n = walker.nextNode();
    while (n) {
      if (n.nodeType === 3) translateNode(n);
      else if (!SKIP(n)) {
        for (const attr of ['placeholder', 'title', 'aria-label']) {
          if (n.hasAttribute(attr)) {
            const t = tr(n.getAttribute(attr));
            if (t !== null) n.setAttribute(attr, t);
          }
        }
      }
      n = walker.nextNode();
    }
  }

  const observer = new MutationObserver((list) => {
    if (lang === 'ar') return;
    for (const m of list) {
      if (m.type === 'characterData') translateNode(m.target);
      else for (const n of m.addedNodes) translateNode(n);
    }
  });

  function applyDir() {
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS[lang].dir;
  }

  function setLang(l) {
    if (!LANGS[l] || l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (_) { /* ignore */ }
    applyDir();
    if (typeof window.I18N.onChange === 'function') window.I18N.onChange();
  }

  // أزرار اختيار اللغة
  const switcher = () => `<div class="lang-switch" data-no-tr>${Object.entries(LANGS).map(([k, v]) =>
    `<button type="button" class="lang-btn ${k === lang ? 'on' : ''}" data-lang="${k}">${v.name}</button>`).join('')}</div>`;

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]');
    if (b) { e.preventDefault(); setLang(b.dataset.lang); }
  });

  applyDir();
  const start = () => {
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    translateNode(document.body);
  };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);

  window.I18N = {
    get lang() { return lang; },
    setLang,
    switcher,
    t: (ar) => (lang === 'ar' ? ar : word(ar) || ar),
    onChange: null,
  };
})();
