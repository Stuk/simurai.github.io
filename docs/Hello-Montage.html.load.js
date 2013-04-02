montageDefine("ed2cab6","docs/Hello-Montage.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Hello Montage - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<ol>\n<li><a href=Quick-Start.html>Quick Start</a></li>\n<li><a href=Exploring-components.html>Exploring Components</a></li>\n<li><strong>Hello Montage</strong></li>\n</ol><hr><p>Having come this far we have generated the default welcome application using <code>minit</code> and created a custom <code>NameTag</code> component for us to use.</p>\n\n<p>Now we\'ll learn how to assemble components into a useful user interface, surfacing and synchronizing data between objects and user interface, and observing and reacting the user interface for events.</p>\n\n<h2>Reveal the Main Component<a class=anchor id=Reveal-the-Main-Component href="#Reveal-the-Main-Component"></a>\n</h2>\n\n<p>The default welcome application has a quick introduction to Montage that will help get us started. The content you see at <a href="http://localhost:8000">localhost:8000</a>, or wherever you may be serving this application from, starts inside the <code>index.html</code> being served.</p>\n\n<p>That <code>index.html</code> uses a Montage <code>loader</code> component to specify that when ready it should load the <code>Welcome</code> component immediately.</p>\n\n<p>By convention, Montage applications start with a <code>Main</code> component, which minit happens to have generated for us.</p>\n\n<p>Let\'s start by revealing that <code>Main</code> component as a child of the <code>Welcome</code> component located at <code>ui/welcome.reel/welcome.html</code></p>\n\n<p>Replace the following serialization text:\n</p><div class=highlight><pre>"<span class=n>main</span>"<span class=p>:</span> <span class=p>{</span>\n\n<span class=p>}</span>\n</pre></div>\n\n<p>with this new text:\n</p><div class=highlight><pre>"<span class=n>main</span>"<span class=p>:</span> <span class=p>{</span>\n    "<span class=n>prototype</span>"<span class=p>:</span> "<span class=n>ui</span><span class=o>/</span><span class=n>main</span><span class=p>.</span><span class=n>reel</span>"<span class=p>,</span>\n    "<span class=k>properties</span>"<span class=p>:</span> <span class=p>{</span>\n        "<span class=n>element</span>"<span class=p>:</span> <span class=p>{</span>"#"<span class=p>:</span> "<span class=n>main</span>"<span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Refreshing the page should now show the main component as a child of our welcome component. That\'s composition; that\'s how we build Montage applications by assembling the patchwork of components that serve as our visual user interface.</p>\n\n<p>Now let\'s add the <code>NameTag</code> component we created earlier to the <code>Main</code> component\'s template at <code>ui/main.reel/main.html</code></p>\n\n<ol>\n<li>\n<p>Add a placeholder element for the NameTag component\n</p>\n<div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"main"</span> <span class=na>class=</span><span class=s>"Main"</span><span class=nt>&gt;</span>Hello <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"nameTag"</span><span class=nt>&gt;&lt;/span&gt;&lt;/div&gt;</span>\n</pre></div>\n</li>\n<li>\n<p>Add serialization entry for the NameTag component that links the component to its placeholder\n</p>\n<div class=highlight><pre>"<span class=n>nameTag</span>"<span class=p>:</span> <span class=p>{</span>\n    "<span class=n>prototype</span>"<span class=p>:</span> "<span class=n>ui</span><span class=o>/</span><span class=n>name</span><span class=o>-</span><span class=n>tag</span><span class=p>.</span><span class=n>reel</span>"<span class=p>,</span>\n    "<span class=k>properties</span>"<span class=p>:</span> <span class=p>{</span>\n        "<span class=n>element</span>"<span class=p>:</span> <span class=p>{</span>"#"<span class=p>:</span> "<span class=n>nameTag</span>"<span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li>\n<p>Pretty up the NameTag component in <code>ui/name-tag.reel/name-tag.css</code>\n</p>\n<div class=highlight><pre><span class=na>.NameTag</span> <span class=err>{</span>\n    <span class=nl>color:</span> <span class=nf>green</span><span class=err>;</span>\n<span class=err>}</span>\n</pre></div>\n</li>\n<li>\n<p>Make the NameTag component a span and give some visible content in <code>ui/name-tag.reel/name-tag.html</code>\n</p>\n<div class=highlight><pre><span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"name-tag"</span> <span class=na>class=</span><span class=s>"NameTag"</span><span class=nt>&gt;</span>Name<span class=nt>&lt;/span&gt;</span>\n</pre></div>\n</li>\n<li><p>Refresh the browser and enjoy the pretty green name tag.</p></li>\n</ol><p>We now have a pretty respectable component tree. But we\'re just getting started.</p>\n\n<h2>Declarative Bindings<a class=anchor id=Declarative-Bindings href="#Declarative-Bindings"></a>\n</h2>\n\n<p>We didn\'t instruct our application exactly how to create our components nor how to insert them. We relied on a powerful technique known as declarative programming where we specified the intent of what we wanted, trusting Montage to interpret that intent and do the right thing.</p>\n\n<p>Just as we\'ve declaratively assembled our visual component tree we can also declaratively connect parts of it to an underlying model. Though we\'ll let our components serve as the model for the sake of example.</p>\n\n<ol>\n<li>\n<p>Add a name property to the <code>NameTag</code> component\'s implementation at <code>ui/name-tag.reel/name-tag.js</code>\n</p>\n<div class=highlight><pre><span class=n>exports</span><span class=p>.</span><span class=n>NameTag</span> <span class=p>=</span> <span class=n>Montage</span><span class=p>.</span><span class=n>create</span><span class=p>(</span><span class=n>Component</span><span class=p>,</span> <span class=o>/**</span> <span class=p>@</span><span class=n>lends</span> <span class=n>module</span><span class=p>:</span>"<span class=n>ui</span><span class=o>/</span><span class=n>name</span><span class=o>-</span><span class=n>tag</span><span class=p>.</span><span class=n>reel</span>"<span class=p>.</span><span class=n>NameTag</span># <span class=o>*/</span> <span class=p>{</span>\n\n    <span class=n>name</span><span class=p>:</span> <span class=p>{</span>\n        <span class=n>value</span><span class=p>:</span> "<span class=n>Alice</span>"\n    <span class=p>}</span>\n\n<span class=p>});</span>\n</pre></div>\n</li>\n<li><p>Add a Montage provided <code>DynamicText</code> component to the <code>NameTag</code> component\'s template at <code>ui/name-tag.reel/name-tag.html</code></p></li>\n</ol><p>HTML\n</p><div class=highlight><pre><span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"name-tag"</span> <span class=na>class=</span><span class=s>"NameTag"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"name"</span><span class=nt>&gt;&lt;/span&gt;</span>\n<span class=nt>&lt;/span&gt;</span>\n</pre></div>\n\n<p>Serialization\n</p><div class=highlight><pre><span class=s>"name"</span><span class=o>:</span> <span class=p>{</span>\n    <span class=s>"prototype"</span><span class=o>:</span> <span class=s>"montage/ui/dynamic-text.reel"</span><span class=p>,</span>\n    <span class=s>"properties"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s>"#"</span><span class=o>:</span> <span class=s>"name"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"value"</span><span class=o>:</span> <span class=p>{</span><span class=s>"&lt;-"</span><span class=o>:</span> <span class=s>"@owner.name"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Here we have specified that the <code>value</code> property of the <code>DynamicText</code> component we create will be the same as the owner\'s <code>name</code> property. Anytime the <code>owner.name</code> property changes, so will the value we see in the rendered view.</p>\n\n<p>Refreshing the page should show a nice green Alice.</p>\n\n<p>Bindings are among the pinnacle of declarative bliss. After declaring that binding between these two properties we don\'t need to do anything to make it happen or to keep it happening.</p>\n\n<p>Let\'s see the binding keep working.</p>\n\n<h2>Driving Changes Through Bindings<a class=anchor id=Driving-Changes-Through-Bindings href="#Driving-Changes-Through-Bindings"></a>\n</h2>\n\n<p>We want to provide some interface for changing that name; here\'s where we start architecting our application. Montage provides an <code>InputText</code> component but first we need to determine where to put it. When our application is small the decision may be easy, as an application grows it\'s important to keep components, and all other objects, loosely coupled and highly cohesive to aid in determining where responsibilities live.</p>\n\n<p>For our purposes we want <code>NameTag</code> to be a read-only component, so we\'ll make editing the job of our <code>Main</code> component.</p>\n\n<ol>\n<li>Insert an <code>InputText</code> component as a child of the <code>Main</code> component.</li>\n</ol><p>HTML\n</p><div class=highlight><pre><span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"main"</span> <span class=na>class=</span><span class=s>"Main"</span><span class=nt>&gt;</span>\n    Hello <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"nameTag"</span><span class=nt>&gt;&lt;/span&gt;</span>\n    <span class=nt>&lt;input</span> <span class=na>type=</span><span class=s>"text"</span> <span class=na>data-montage-id=</span><span class=s>"nameInput"</span><span class=nt>&gt;</span>\n<span class=nt>&lt;/div&gt;</span>\n</pre></div>\n\n<p>Serialization\n</p><div class=highlight><pre><span class=s>"nameInput"</span><span class=o>:</span> <span class=p>{</span>\n    <span class=s>"prototype"</span><span class=o>:</span> <span class=s>"montage/ui/input-text.reel"</span><span class=p>,</span>\n    <span class=s>"properties"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s>"#"</span><span class=o>:</span> <span class=s>"nameInput"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"value"</span><span class=o>:</span> <span class=p>{</span><span class=s>"&lt;-&gt;"</span><span class=o>:</span> <span class=s>"@nameTag.name"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Now we\'ve bound the value property of the slider to be the same as the nameTag\'s name property. We\'ve also made this a two-way binding as indicated by the double headed arrow; changes on either side of this binding propagate to the other side.</p>\n\n<p>In addition to deciding where components should live, there\'s a decision to be made about which side to establish a binding on, but especially when two-way bindings are concerned it\'s a finer point that can be explored later.</p>\n\n<ol>\n<li>Refresh and give it a try. As you type the name tag should update live.</li>\n</ol><h2>Listening for Events<a class=anchor id=Listening-for-Events href="#Listening-for-Events"></a>\n</h2>\n\n<p>Components can emit events in the same sense that DOM elements emit events. A Montage <code>Button</code> component, for example, dispatches an <code>action</code> event with itself as the target. This event is synthesized from a sequence of mouse or touch events that the button component itself observes on its own element.</p>\n\n<p>Let\'s add a <code>Button</code> and handle its <code>action</code> event.</p>\n\n<ol>\n<li>Add the <code>Button</code> component to the <code>Main</code> component\'s template at <code>ui/main.reel/main.html</code>\n</li>\n</ol><p>HTML\n</p><div class=highlight><pre><span class=nt>&lt;button</span> <span class=na>data-montage-id=</span><span class=s>"greetButton"</span><span class=nt>&gt;&lt;/button&gt;</span>\n</pre></div>\n\n<p>Serialization\n</p><div class=highlight><pre><span class=s>"greetButton"</span><span class=o>:</span> <span class=p>{</span>\n    <span class=s>"prototype"</span><span class=o>:</span> <span class=s>"montage/ui/button.reel"</span><span class=p>,</span>\n    <span class=s>"properties"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s>"#"</span><span class=o>:</span> <span class=s>"greetButton"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s>"label"</span><span class=o>:</span> <span class=p>{</span><span class=s>"&lt;-"</span><span class=o>:</span> <span class=s>"@nameTag.name"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s>"listeners"</span><span class=o>:</span> <span class=p>[</span>\n        <span class=p>{</span>\n            <span class=s>"type"</span><span class=o>:</span> <span class=s>"action"</span><span class=p>,</span>\n            <span class=s>"listener"</span><span class=o>:</span> <span class=p>{</span><span class=s>"@"</span><span class=o>:</span> <span class=s>"owner"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>]</span>\n<span class=p>}</span>\n</pre></div>\nFor the sake of showing off bindings we use one here to bind the <code>label</code> of the greetingButton to be the same as the <code>nameTag.name</code> property. But this is old hat by now.\n\n<p>The serialization unit of interest here is <code>listeners</code>. This block is an array of listener entries, each one specifying the event <code>type</code> being observed by name and the <code>listener</code> interested in handling the event. Of course, many different listeners can be registered here and they can also provide a <code>useCapture</code> property in their entry to specify that the event should be handled in the capture phase of distribution.</p>\n\n<ol>\n<li><p>Refreshing at this point will render a button with the expected label. Behold the joy of code-free declarative binding by changing the name in the <code>nameInput</code> and see it reflected in both the <code>nameTag</code> and the <code>greetButton</code> component instances.</p></li>\n<li><p>Now to make the button do something, let\'s add some code to the <code>listener</code> object we specified, the <code>Main</code> component, inside <code>ui/main.reel/main.js</code></p></li>\n</ol><p></p><div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>Main</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Component</span><span class=p>,</span> <span class=cm>/** @lends module:"ui/main.reel".Main# */</span> <span class=p>{</span>\n\n    <span class=nx>handleGreetButtonAction</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span> <span class=p>(</span><span class=nx>event</span><span class=p>)</span> <span class=p>{</span>\n            <span class=nx>alert</span><span class=p>(</span><span class=s2>"Hello "</span> <span class=o>+</span> <span class=k>this</span><span class=p>.</span><span class=nx>templateObjects</span><span class=p>.</span><span class=nx>nameTag</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n\n<span class=p>});</span>\n</pre></div>\n\n<p>While the standard JavaScript <code>addEventListener</code> either expects a function reference or an <code>eventHandler</code> object that implements a <code>handleEvent</code> method Montage helps direct an event to a more specific handler method on a listener if implemented.</p>\n\n<p>In this case we\'ve implemented <code>handleGreetButtonAction</code> which describes the fact that this method will handle <code>action</code> events emitted from a target with an identifier of <code>greetButton</code> during the bubble phase of event distribution.</p>\n\n<p>This is the most specific handler possible, less specific alternatives would have been:</p>\n\n<ul>\n<li><code>handleAction</code></li>\n<li><code>handleEvent</code></li>\n</ul><p>This reduces the need for inspecting each event in a generic <code>handleEvent</code> method to determine what the event was and how it should be handled.</p>\n\n<p>The <code>templateObjects</code> property exposes all the objects that were defined in a component\'s template. It\'s a convenient way to access any object in the template by its <code>label</code>.</p>\n\n<p>Reaching into another component starts to suggest that we should start to consider formalizing the model we\'re working with (a person? an identity?) and expose it somewhere that all concerned components can access it easily. But that\'s a lesson for another day.</p>\n\n<ol>\n<li>Refresh the browser and click on the <code>greetButton</code>. If everything worked as expected it should simply alert the name that\'s in the <code>nameTag</code> component.</li>\n</ol><h2>Take Off the Training Wheels<a class=anchor id=Take-Off-the-Training-Wheels href="#Take-Off-the-Training-Wheels"></a>\n</h2>\n\n<p>As well as it\'s served us, it\'s time to ditch the welcome component.</p>\n\n<ol>\n<li>\n<p>Inside the <code>index.html</code> remove the explicit loading of the <code>Welcome</code> component.\n</p>\n<div class=highlight><pre>"<span class=n>owner</span>"<span class=p>:</span> <span class=p>{</span>\n    "<span class=n>prototype</span>"<span class=p>:</span> "<span class=n>montage</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>loader</span><span class=p>.</span><span class=n>reel</span>"\n<span class=p>}</span>\n</pre></div>\n</li>\n<li><p>Refresh the browser and notice how we stopped using the <code>Welcome</code> component as a decorative frame around the <code>Main</code> component.</p></li>\n</ol><hr><p>There still more to learn of course as you\'ve just scratched the surface of what Montage provides. Hopefully it\'s already clear how simple things are made simple with a declarative framework that embraces components and bindings.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})