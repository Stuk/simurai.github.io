montageDefine("099dee8","ui/popup/alert.reel/alert.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=alert.css>\n    <script type="text/montage-serialization">{"dynamictext1":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"title"}},"bindings":{"value":{"<-":"@owner.title"}}},"dynamictext2":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"msg"}},"bindings":{"value":{"<-":"@owner.msg"}}},"dynamictext3":{"prototype":"ui/dynamic-text.reel","properties":{"element":{"#":"msg-detail"}},"bindings":{"value":{"<-":"@owner.details"}}},"button1":{"prototype":"ui/button.reel","properties":{"identifier":"Ok","element":{"#":"action-ok"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"owner":{"prototype":"ui/popup/alert.reel","properties":{"element":{"#":"alert-container"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=alert-container class=montage-Alert-dialog>\n        <div class=montage-Popup-header>\n            <h3 data-montage-id=title class=title></h3>\n        </div>\n        <div class=montage-Alert-content>\n                <div data-montage-id=msg class=msg></div>\n                <div data-montage-id=msg-detail class=msg-detail></div>\n        </div>\n        <div class=montage-Popup-footer>\n            <div class=montage-Alert-actions>\n                <button class=submit data-montage-id=action-ok>OK</button>\n            </div>\n            <div class=clearfix></div>\n        </div>\n    </div>\n</body>\n</html>'})