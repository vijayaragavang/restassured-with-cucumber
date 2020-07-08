$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetBookByISBN.feature");
formatter.feature({
  "line": 1,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ],
      "line": 8
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ],
      "line": 11
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ],
      "line": 12
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "BookStepDefinitions.a_book_exists_with_isbn(String)"
});
formatter.result({
  "duration": 1085432675,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 1714801834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "BookStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 42040641,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 547203931,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.response_contains_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 44955518,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "press submit",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "BookStepDefinitions.a_book_exists_with_isbn(String)"
});
formatter.result({
  "duration": 1004498,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.submitCreateCustomerWithValidData()"
});
formatter.result({
  "duration": 1373697611,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c401\u003e but was \u003c201\u003e.\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\n\tat stepdefs.BookStepDefinitions.submitCreateCustomerWithValidData(BookStepDefinitions.java:114)\n\tat ✽.And press submit(GetBookByISBN.feature:17)\n",
  "status": "failed"
});
});