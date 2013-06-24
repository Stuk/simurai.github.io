montageDefine("442bf1c","docs/spec:-inputtext.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: InputText - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>InputText is a Component wrapper for the <code>&lt;input&gt;</code> HTMLElement. The HTML markup for the InputText is the same as the standard HTML5 markup (<code>&lt;input&gt;</code>). Wrapping the <code>&lt;input&gt;</code> HTMLElement as a Montage Textfield component adds Data Binding support for all writable attributes of this element.</p>\n\n<p>It supports all (most?) standard attributes of the <code>&lt;input&gt;</code> HTMLElement as specified here - <a href="http://www.w3.org/TR/html5/the-input-element.html#the-input-element">http://www.w3.org/TR/html5/the-input-element.html#the-input-element</a>\n<a href="https://developer.mozilla.org/en/HTML/Element/Input">https://developer.mozilla.org/en/HTML/Element/Input</a></p>\n\n<h2>Properties<a class=anchor id=Properties href="#Properties"></a>\n</h2>\n\n<p><code>value</code></p>\n\n<p>Type: string\nDefault: \nText to be displayed in this component</p>\n\n<p><code>converter</code>\nType: Object instance\nDefault: null\nOptional. If provided, the converter will be used to convert the value before the value is displayed.</p>\n\n<p><code>updateOnInput</code>\nType: boolean\nDefault: true\nThis property allows the App developer to force the conversion and setting of the “value” property “on change” instead of “on input”.</p>\n\n<p>Some converters like the  DateConverter do not support partial conversion (eg: as the user is typing in) and therefore the converter is called only when the user has finished typing and tabs out of the field. By setting this flag to false, the converter will be invoked only on “change” and not on “input” regardless of the type of converter.</p>\n\n<p><code>errorMessage</code>\nData Type = String, Default value = null (if there is no error)</p>\n\n<p>// Standard HTML5 Attributes</p>\n\n<p><code>autocomplete</code>\nData Type = Boolean, Default value = false\naccept string: “on”, “off”</p>\n\n<p><code>disabled</code>\nData Type = boolean, Default value = false\nDoesn’t prevent the value to be changed programmatically via the value property</p>\n\n<p><code>list</code>\nList of options\nData Type = String, Default value = null\nThe id of a datalist on the same document.\npolyfill to a getElementById on input.</p>\n\n<p><code>maxlength</code>\nData Type = Number, Default value = null</p>\n\n<p><code>multiple</code>\nData Type = String, Default value = null</p>\n\n<p><code>name</code>\nData Type = String, Default value = null</p>\n\n<p><code>pattern</code>\nData Type = String, Default value = null</p>\n\n<p><code>placeholder</code>\nData Type = String, Default value = null</p>\n\n<p><code>readonly</code>\nData Type = Boolean, Default value = null</p>\n\n<p><code>required</code>\nData Type = Boolean, Default value = null</p>\n\n<p><code>size</code>\nData Type = String, Default value = null</p>\n\n<p><code>title</code>\nData Type = String, Default value = null</p>\n\n<h2>Markup &amp; Serialization<a class=anchor id="Markup-&amp;-Serialization" href="#Markup-&amp;-Serialization"></a>\n</h2>\n\n<h3>InputText with input type=”text”<a class=anchor id="InputText-with-input-type=”text”" href="#InputText-with-input-type=%E2%80%9Dtext%E2%80%9D"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"text"</span> <span class=na>placeholder=</span><span class=s>"Enter first name"</span> <span class=na>id=</span><span class=s>"fname"</span> <span class=na>required</span> <span class=na>value=</span><span class=s>"foo"</span> <span class=na>maxlength=</span><span class=s>"20"</span><span class=nt>/&gt;</span>\n</pre></div>\n\n<p>Serialization spec with bindings to the value and title attributes of the Textfield\n</p><div class=highlight><pre><span class=p>{</span>\n<span class=nt>"fname"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"module"</span><span class=p>:</span> <span class=s2>"montage/ui/textfield.reel"</span><span class=p>,</span>\n            <span class=nt>"name"</span><span class=p>:</span> <span class=s2>"Textfield"</span><span class=p>,</span>\n            <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"fname"</span><span class=p>},</span>\n                <span class=nt>"maxlength"</span><span class=p>:</span> <span class=s2>"5"</span>\n            <span class=p>},</span>\n            <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span>\n                    <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"sample-form"</span><span class=p>},</span>\n                    <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"firstName"</span><span class=p>,</span>\n                    <span class=nt>"oneway"</span><span class=p>:</span> <span class=kc>false</span>\n                <span class=p>},</span>\n                <span class=nt>"title"</span><span class=p>:</span> <span class=p>{</span>\n                    <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"sample-form"</span><span class=p>},</span>\n                    <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"firstName"</span><span class=p>,</span>\n                    <span class=nt>"oneway"</span><span class=p>:</span> <span class=kc>false</span>\n                <span class=p>}</span>\n                \n            <span class=p>}</span>\n        <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h3>Textfield with input type=”email”<a class=anchor id="Textfield-with-input-type=”email”" href="#Textfield-with-input-type=%E2%80%9Demail%E2%80%9D"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"email"</span> <span class=na>id=</span><span class=s>"email1"</span> <span class=na>value=</span><span class=s>"foo@bar.com"</span> <span class=nt>/&gt;</span>\n</pre></div>\n\n<p>Serialization\n</p><div class=highlight><pre><span class=p>{</span>\n<span class=nt>"email1"</span><span class=p>:</span> <span class=p>{</span>\n            <span class=nt>"module"</span><span class=p>:</span> <span class=s2>"montage/ui/textfield.reel"</span><span class=p>,</span>\n            <span class=nt>"name"</span><span class=p>:</span> <span class=s2>"Textfield"</span><span class=p>,</span>\n            <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"email1"</span><span class=p>}</span>\n            <span class=p>},</span>\n            <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n                <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span>\n                    <span class=nt>"boundObject"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"sample-form"</span><span class=p>},</span>\n                    <span class=nt>"boundObjectPropertyPath"</span><span class=p>:</span> <span class=s2>"email"</span><span class=p>,</span>\n                    <span class=nt>"oneway"</span><span class=p>:</span> <span class=kc>false</span>\n                <span class=p>}</span>\n            <span class=p>}</span>           \n        <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h3>Textfield with input type=”date”/”datetime”/<a class=anchor id="Textfield-with-input-type=”date”/”datetime”/" href="#Textfield-with-input-type=%E2%80%9Ddate%E2%80%9D/%E2%80%9Ddatetime%E2%80%9D/"></a>\n</h3>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"date"</span> <span class=na>id=</span><span class=s>"date1"</span> <span class=na>value=</span><span class=s>""</span> <span class=nt>/&gt;</span>\n<span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"date"</span> <span class=na>id=</span><span class=s>"arrival-date"</span> <span class=na>value=</span><span class=s>""</span> <span class=na>class=</span><span class=s>"span2"</span><span class=nt>/&gt;</span>\n<span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"time"</span> <span class=na>id=</span><span class=s>"arrival-time"</span> <span class=na>value=</span><span class=s>""</span> <span class=na>class=</span><span class=s>"span2"</span><span class=nt>/&gt;</span>\n</pre></div>\n\n<p>Serialization:\n</p><div class=highlight><pre><span class=p>{</span>       \n    <span class=nt>"date1"</span><span class=p>:</span> <span class=p>{</span>\n         <span class=nt>"module"</span><span class=p>:</span> <span class=s2>"montage/ui/textfield.reel"</span><span class=p>,</span>\n         <span class=nt>"name"</span><span class=p>:</span> <span class=s2>"Textfield"</span><span class=p>,</span>\n         <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n             <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"date1"</span><span class=p>},</span>\n              <span class=nt>"converter"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"dateconverter1"</span><span class=p>}</span>\n         <span class=p>}</span>            \n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Tests - <a href="https://github.com/Motorola-Mobility/montage/blob/master/test/ui/textfield-spec.js">test/ui/textfield-spec.js</a></p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(s,n,a){var e,t=s.getElementsByTagName(n)[0];s.getElementById(a)||(e=s.createElement(n),e.id=a,e.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(e,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});