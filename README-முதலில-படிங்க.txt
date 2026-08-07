GLOBAL GATEWAY INTERNATIONALS - Multi-Page Website (Updated with Blogs)
==========================================================================

இது single-page website-ல இருந்து split பண்ணப்பட்ட 28 தனி HTML files
(ஏற்கனவே இருந்த 26 + புது Blog pages 2).

FOLDER STRUCTURE:
-----------------
index.html            -> Home page
work-visa.html        -> Work Visa main page
study-visa.html       -> Study Visa main page
migrate.html          -> Migrate main page
visit-visa.html       -> Visit Visa page
dependent-visa.html   -> Dependent/Family Visa page
contact.html          -> Contact Us page
blogs.html            -> Latest Blogs listing page (புதுசு)

work/canada.html, work/australia.html, work/europe.html, work/uk.html,
work/new-zealand.html, work/singapore.html, work/gulf.html

study/canada.html, study/australia.html, study/europe.html, study/uk.html,
study/new-zealand.html, study/singapore.html, study/gulf.html

migrate/canada.html, migrate/australia.html, migrate/uk.html,
migrate/new-zealand.html, migrate/europe.html

blogs/mistakes-visa.html   -> "10 Common Visa Mistakes" blog post (புதுசு)

IMPORTANT - IMAGES:
--------------------
எல்லா unga original images-ஐயும் (logo.jpeg, istockphoto-....jpg,
canadaflag.jpg, visamistakes.png, etc.) இந்த
"Global-Gateway-Internationals" folder-ஓட ROOT-ல (index.html இருக்குற
இடத்துலேயே) copy பண்ணுங்க. work/, study/, migrate/, blogs/ subfolder
பக்கங்களுக்கு நான் ஏற்கனவே "../logo.jpeg" மாதிரி correct relative
path போட்டு வெச்சிருக்கேன்.

NAVIGATION:
-----------
- Old single-page-ல "showPage('xxx')" JS function-தான் pages-ஐ மாத்துச்சு.
- இப்போ ஒவ்வொரு navigation பட்டனும் (nav bar, dropdowns, "Apply"
  buttons, "Book Consultation", "Today's Blog" floating card, "Back to
  Latest Blogs" button) real page-க்கு (location.href) navigate
  பண்ணும்படி மாத்திருக்கேன்.
- Design, text, colors, animations, dropdown menus, mobile menu, contact
  form - எதுவும் மாத்தல.
- Note: head-ல ஒரு பழைய unused "showPage()" function + "onpopstate"
  code இன்னும் இருக்கு, அது dead code (எந்த element-ஐயும் affect
  பண்ணாது), safe-ஆ அப்படியே இருக்கலாம்.

NEXT STEPS:
-----------
1. Zip-ஐ extract பண்ணுங்க
2. Images-ஐ root-ல போடுங்க
3. முழு folder structure-ஐயும் hosting-ல upload பண்ணுங்க
4. Home page-ல "Today's Blog" card click பண்ணி -> Latest Blogs -> Blog
   detail page வரைக்கும் navigate பண்ணி டெஸ்ட் பண்ணுங்க
