montageDefine("fb1a1be","package.json",{exports:{name:"mousse",version:"0.1.4",description:"Deserialization of JavaScript objects",keywords:["deserialization","serialization"],author:{name:"António Afonso",email:"antonio.afonso@gmail.com",url:"http://github.com/aadsm/"},contributors:[{name:"António Afonso",email:"antonio.afonso@gmail.com",url:"http://github.com/aadsm/"}],bugs:{url:"http://github.com/montagejs/mousse/issues"},licenses:[{type:"BSD",url:"http://github.com/montagejs/mousse/raw/master/LICENSE.md"}],repository:{type:"git",url:"http://github.com/montagejs/mousse.git"},main:"mousse",dependencies:{q:"~0.9.6",collections:"~0.1.21"},devDependencies:{"jasmine-node":"~1.9.1"},scripts:{test:"./node_modules/.bin/jasmine-node spec"},readme:'# Mousse\n\nA serialization library that serializes graphs of JavaScript objects.\n\nIts main purpose is to provide the features that are missing in JSON and a mechanism to easily extend the serialization format with new types or custom JavaScript objects.\n\nThis is the library used by the Montage framework to manage the serialization of objects in its templates.\n\n## What it does that JSON doesn\'t\n\n * Named objects\n * References and circular references (no more `TypeError: Converting circular structure to JSON`)\n * Regular Expressions\n * Custom Types\n * Asynchronous revivers\n\n## API Reference\n\n**`Serializer()`**\n\n-   **`serializeObject(object)`**\n\n    Serializes an object into a string.\n\n-   **`serialize(objects)`**\n\n    Serializes objects into a string, each object is passed with a label associated with it. Objects are passed in an object literal `{label1: object1, label2: object2, ..., labelN: objectN}`.\n\n-   **`setSerializationIndentation(indentation)`**\n\n    Set the indentation level of the serialization string (in number of spaces).\n\n**`Deserializer(serializationString)`**\n\n-   _**`constructor`**_\n\n    Creates a deserialization object to deserialize the objects serialized in `serializationString`.\n\n-   **`deserializeObject()`**\n\n    Returns a promise for an object that was serialized with `serializeObject`.\n\n-   **`deserialize(instances)`**\n\n    Returns a promise for the objects that were serialized with `serialize`. This result is an object literal with the deserialized objects and their respective labels: `{label1: object1, label2: object2, ..., labelN: objectN}`.\n\n    The `instances` parameter allows to override the deserialization of specific objects by using the instance passed instead, they are passed in an object literal: `{label1: object1, label2: object2, ..., labelN: objectN}`.\n\n## Serialization of JavaScript objects\n### Multiple Objects\n```javascript\nvar Serializer = require("mousse").Serializer;\n\nvar object = {\n    x: 2,\n    y: 4\n};\n\nvar array = [1, 2, 3];\n\nvar serializationString = new Serializer().serialize({foo: object, bar: array});\n```\n\n### Single Object\n\nWhen serializing a single object there\'s no need to provide a label:\n\n```javascript\nvar Serializer = require("mousse").Serializer;\n\nvar object = {\n    x: 2,\n    y: 4\n};\n\nvar serializationString = new Serializer().serializeObject(object);\n```\n\nThere\'s also a shorthand function to serialize a single object:\n\n```javascript\nvar serialize = require("mousse").serialize;\n\nvar object = {\n    x: 2,\n    y: 4\n};\n\nvar serializationString = serialize(object);\n```\n\n## Deserialization of JavaScript objects\n### Multiple Objects\n```javascript\nvar Deserializer = require("mousse").Deserializer,\n    deserializer = new Deserializer(serializationString);\n\ndeserializer.deserialize()\n.then(function(objects) {\n    // deserialized objects are in objects\n});\n```\n\n### Single Object\n```javascript\nvar Deserializer = require("mousse").Deserializer,\n    deserializer = new Deserializer(serializationString);\n\ndeserializer.deserializeObject()\n.then(function(object) {\n    //\n});\n```\n\nAgain, like for serialization, there\'s a shorthand function to deserialize a single object:\n```javascript\nvar Deserializer = require("mousse").deserialize;\n\ndeserialize(serializationString)\n.then(function(object) {\n    //\n});\n```\n\nConsecutive calls to `deserializer.deserialize()` will create a new set of objects from the serialization.\n\n## Serialization Format\n\nThe serialization format is inspired by JSON and it may even be considered as an extension. By itself the format is a JSON valid object.\n\nInstead of only serializing a single object, Mousse is able to serialize several independent objects by providing a label for each one. We can look at it as a dictionary.\n\nThe base format of the serialization is thus an object with as many entries as labeled objects:\n```javascript\n{\n    "label1": {\n        "value": <object1 serialization>\n    },\n\n    "label2": {\n        "value": <object2 serialization>\n    },\n\n    ...,\n\n    "labelN": {\n        "value": <objectN serialization>\n    }\n}\n```\nThe following JavaScript objects are supported:\n\n    * string\n    * number\n    * boolean\n    * null\n    * array\n    * object literal\n    * regular expression\n    * references\n\nNative JavaScript objects are stored just like their JSON representation with the exception of regular expressions (which are not supported by JSON).\n\n### String\n```javascript\nserialize({string: "a string"})\n\n{\n    "string": {\n        "value": "a string"\n    }\n}\n```\n### Number\n```javascript\nserialize({number: 42})\n\n{\n    "number": {\n        "value": 42\n    }\n}\n```\n### Boolean\n```javascript\nserialize({bool: true})\n\n{\n    "bool": {\n        "value": true\n    }\n}\n```\n### Null\n```javascript\nserialize({nil: null})\n\n{\n    "nil": {\n        "value": null\n    }\n}\n```\n### Array\n```javascript\nserialize({array: [1, 2, 3]})\n\n{\n    "array": {\n        "value": [1, 2, 3]\n    }\n}\n```\n### Object Literal\n```javascript\nserialize({object: {x: 2, y: 4}})\n\n{\n    "object": {\n        "value": {\n            "x": 2,\n            "y": 4\n        }\n    }\n}\n```\n### Regular Expression\n```javascript\nserialize({regexp: /regexp/gi})\n\n{\n    "regexp": {\n        "value": {"/": {\n            "source": "regexp",\n            "flags": "gi"\n        }}\n    }\n}\n```\n### References\n\nSince objects have labels it is possible to serialize a reference to an object instead of serializing the entire object again as it happens in JSON:\n```javascript\nvar manager = {\n    name: "Foo"\n}\n\nvar employee = {\n    name: "Bar",\n    manager: manager\n}\n\nserialize({manager: manager, employee: employee})\n\n{\n    "manager": {\n        "value": {\n            "name": "Foo"\n        }\n    },\n\n    "employee": {\n        "value": {\n            "name": "Bar",\n            "manager": {"@": "manager"}\n        }\n    }\n}\n```\nReferences also solves cycles in an object graph:\n```javascript\nvar object = {};\nobject.self = object;\n\nserialize({object: object});\n\n{\n    "object": {\n        "value": {\n            "self": {"@": "object"}\n        }\n    }\n}\n```\nWhen an object is referred more than once it will automatically be assigned a label and only references will be used to refer to it.\n```javascript\nvar array = [1, 2, 3];\nvar object = {\n    foo: array,\n    bar: array\n}\n\nserialize({object: object});\n\n{\n    "object": {\n        "value": {\n            "foo": {"@": "array"},\n            "bar": {"@": "array"}\n        }\n    },\n\n    "array": {\n        "value": [1, 2, 3]\n    }\n}\n```\n## Custom Objects\n\nRoot objects with the `value` property represent JavaScript objects. It is possible to define other types of objects by adding the necessary logic to recognize them and create them.\n\n### Serialization\n\nThe logic to serialize a custom object is handled by the Visitor object. This is the object that visits the graph of objects traversed during serialization and knows what data to store for each type.\nThe interface expects a `getTypeOf` function that returns the type of the object and a `visit<Type>` function that knows what data to store from the object. Multiple `visit<Type>` can be defined as long as `getTypeOf` returns different types.\n\n```javascript\nVisitor.addCustomObjectVisitor({\n    getTypeOf: function(value) {\n        if (value instanceof Map) {\n            return "Map";\n        }\n    },\n\n    visitMap: function(malker, visitor, object, name) {\n        var map = visitor.builder.createCustomObject();\n            mapData = object.toObject();\n\n        malker.visit("map", "type");\n        malker.visit(mapData, "object");\n\n        visitor.storeValue(map, object, name);\n    }\n});\n```\nThe result of the serialization is:\n```javascript\n{\n    "root": {\n        "type": "map",\n        "object": {/* map data */}\n    }\n}\n```\n\n### Deserialization\n\nThe logic to deserialize a custom object is handled by the `Reviver` object. This is the object that knows how to revive objects. The interface expects a `getTypeOf` function that returns the type of the object and a `revive<Type>` function that knows how to revive the object. Multiple `revive<Type>` can be defined as long as `getTypeOf` returns different types.\n\nExample to deserialize:\n```javascript\n{\n    "root": {\n        "type": "map",\n        "object": {/* map data */}\n    }\n}\n```\n```javascript\nReviver.addCustomObjectReviver({\n    getTypeOf: function(value) {\n        if (value.type === "map") {\n            return "Map";\n        }\n    },\n\n    reviveMap: function(value, context, label) {\n        var map = new Map(value.object);\n\n        if (label) {\n            context.setObjectLabel(map, label);\n        }\n\n        return map;\n    }\n});\n```\nThe result of the deserialization is:\n```javascript\n{\n    root: <Map Object>\n}\n```\n\nReviver functions can be asynchronous by returning a promise to the revived value.\n\n### Context\n\nThe `context` object is given as the second parameter to all `revive*` functions and it is used to set labels on deserialized objects, so they can be accessed after the deserialization, and to get objects that were serialized under a specific label.\n\n * `setObjectLabel(object, label)` - Defines the label of `object`.\n * `getObject(label)` - Returns the object with label `label`.\n\n## Extending the Serialization Format\n\nThe Mousse serialization format can be extended by extending the Builder and Visitor objects.\n\n### Serialization\n\nDuring serialization an AST-like object is created that holds all the data needed to be serialized. It is the role of the `Visitor` to create this AST.\n\nWhen the AST is finished it is the role of the `Builder` to generate an output format by reading the AST. The `Builder` presented in Mousse generates JSON but it should be possible to create a Builder that generates another format, for instance XML.\n\nThe `Builder` provides the necessary methods to create the AST Nodes:\n\n * `createObjectLiteral()`\n * `createArray()`\n * `createObjectReference()`\n * `createRegExp(regexp)`\n * `createString(string)`\n * `createNumber(number)`\n * `createBoolean(value)`\n * `createNull()`\n * `createCustomObject()`\n\nThese are the JavaScript objects that Mousse supports. In order to create new ones it is necessary to extend the `Builder` and the `Visitor`.\n\nTo extend the serialization format to know about DOM elements and to serialize them into `{"#" "<element id>"}` we need to:\n\n#### Create the AST node\n```javascript\nfunction ElementReference(root, id) {\n    Value.call(this, root, id);\n}\n\nElementReference.prototype = Object.create(Value.prototype, {\n    constructor: {value: ElementReference},\n\n    _getSerializationValue: {\n        value: function() {\n            return {"#": this.value};\n        }\n    }\n});\n```\n#### Extend the Builder object\n```javascript\nfunction ExtendedBuilder() {\n    Builder.call(this);\n}\n\nExtendedBuilder.prototype = Object.create(Builder.prototype, {\n    constructor: {value: ExtendedBuilder},\n\n    createElementReference: {\n        value: function(id) {\n            return new ElementReference(this._root, id);\n        }\n    }\n});\n```\n#### Extend the Visitor object\n```javascript\nfunction ExtendedVisitor(builder, labeler) {\n    Visitor.call(this, builder, labeler);\n}\n\nExtendedVisitor.prototype = Object.create(Visitor.prototype, {\n    constructor: {value: ExtendedVisitor},\n\n    getTypeOf: {\n        value: function(object) {\n            if (!!(object && 1 === object.nodeType)) {\n                return "ElementReference";\n            }\n        }\n    },\n\n    visitElementReference: {\n        value: function(malker, object, name) {\n            var elementReference,\n                id = object.id;\n\n            elementReference = this.builder.createElementReference(id);\n            this.storeValue(elementReference, object, name);\n        }\n    }\n});\n```\n### Deserialization\n\nDeserialization is handled by the `Reviver` and as such this object needs to be extended to understand the new syntax added to the serialization (`{"#": "<element id>"}`).\n```javascript\nExtendedReviver.prototype = Object.create(Reviver.prototype, {\n    constructor: {value: ExtendedReviver},\n\n    getTypeOf: {\n        value: function(value) {\n            if (value !== null && typeof value === "object"\n                && Object.keys(value).length === 1 && "#" in value) {\n                return "ElementReference";\n            } else {\n                return Reviver.prototype.getTypeOf.call(this, value);\n            }\n        }\n    },\n\n    reviveElementReference: {\n        value: function(value, context, label) {\n            var elementId = value["#"],\n                element = document.getElementById(elementId);\n\n            if (label) {\n                context.setObjectLabel(element, label);\n            }\n\n            return element;\n        }\n    }\n});\n```\n\n## Known Issues\n\nNot possible to serialize literal objects that can be mistaken as a reference or a regexp - `{"@": "label"}` and `{"/": {"source": "regexp"}}`).\n\n',readmeFilename:"README.md",_id:"mousse@0.1.4",_from:"mousse@~0.1.2",directories:{lib:"./"},hash:"fb1a1be",mappings:{q:{name:"q",hash:"84927e8",location:"../q@84927e8/"},collections:{name:"collections",hash:"5fa10d2",location:"../collections@5fa10d2/"}},production:!0,useScriptInjection:!0}});