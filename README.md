# HTTP Status Codes - Modern Cheat Sheet 🚀

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)

A comprehensive, modern, and interactive cheat sheet for all HTTP response status codes. Built with a focus on aesthetics, usability, and performance.

### [🌐 View Live Demo](#) 
*(Replace the link above with your deployed URL)*

---

This repository serves as both a source code for the modern web app and a quick markdown reference for all HTTP status codes.

## 📖 Quick Reference

Click on any status code to view full details and documentation.

### Informational (1xx)
| Code | Title |
|------|-------|
| [100](#100-continue) | Continue |
| [101](#101-switching-protocols) | Switching Protocols |
| [102](#102-processing) | Processing (WebDAV) |

### Success (2xx)
| Code | Title |
|------|-------|
| [200](#200-ok) | OK |
| [201](#201-created) | Created |
| [202](#202-accepted) | Accepted |
| [203](#203-non-authoritative-information) | Non-Authoritative Information |
| [204](#204-no-content) | No Content |
| [205](#205-reset-content) | Reset Content |
| [206](#206-partial-content) | Partial Content |
| [207](#207-multi-status) | Multi-Status (WebDAV) |
| [208](#208-already-reported) | Already Reported (WebDAV) |
| [226](#226-im-used) | IM Used |

### Redirection (3xx)
| Code | Title |
|------|-------|
| [300](#300-multiple-choices) | Multiple Choices |
| [301](#301-moved-permanently) | Moved Permanently |
| [302](#302-found) | Found |
| [303](#303-see-other) | See Other |
| [304](#304-not-modified) | Not Modified |
| [305](#305-use-proxy) | Use Proxy |
| [306](#306-switch-proxy) | Switch Proxy |
| [307](#307-temporary-redirect) | Temporary Redirect |
| [308](#308-permanent-redirect) | Permanent Redirect |

### Client Error (4xx)
| Code | Title |
|------|-------|
| [400](#400-bad-request) | Bad Request |
| [401](#401-unauthorized) | Unauthorized |
| [402](#402-payment-required) | Payment Required |
| [403](#403-forbidden) | Forbidden |
| [404](#404-not-found) | Not Found |
| [405](#405-method-not-allowed) | Method Not Allowed |
| [406](#406-not-acceptable) | Not Acceptable |
| [407](#407-proxy-authentication-required) | Proxy Authentication Required |
| [408](#408-request-timeout) | Request Timeout |
| [409](#409-conflict) | Conflict |
| [410](#410-gone) | Gone |
| [411](#411-length-required) | Length Required |
| [412](#412-precondition-failed) | Precondition Failed |
| [413](#413-payload-too-large) | Payload Too Large |
| [414](#414-uri-too-long) | URI Too Long |
| [415](#415-unsupported-media-type) | Unsupported Media Type |
| [416](#416-range-not-satisfiable) | Range Not Satisfiable |
| [417](#417-expectation-failed) | Expectation Failed |
| [418](#418-im-a-teapot) | I'm a teapot |
| [421](#421-misdirected-request) | Misdirected Request |
| [422](#422-unprocessable-entity) | Unprocessable Entity (WebDAV) |
| [423](#423-locked) | Locked (WebDAV) |
| [424](#424-failed-dependency) | Failed Dependency (WebDAV) |
| [426](#426-upgrade-required) | Upgrade Required |
| [428](#428-precondition-required) | Precondition Required |
| [429](#429-too-many-requests) | Too Many Requests |
| [431](#431-request-header-fields-too-large) | Request Header Fields Too Large |
| [451](#451-unavailable-for-legal-reasons) | Unavailable For Legal Reasons |

### Server Error (5xx)
| Code | Title |
|------|-------|
| [500](#500-internal-server-error) | Internal Server Error |
| [501](#501-not-implemented) | Not Implemented |
| [502](#502-bad-gateway) | Bad Gateway |
| [503](#503-service-unavailable) | Service Unavailable |
| [504](#504-gateway-timeout) | Gateway Timeout |
| [505](#505-http-version-not-supported) | HTTP Version Not Supported |
| [506](#506-variant-also-negotiates) | Variant Also Negotiates |
| [507](#507-insufficient-storage) | Insufficient Storage (WebDAV) |
| [508](#508-loop-detected) | Loop Detected (WebDAV) |
| [510](#510-not-extended) | Not Extended |
| [511](#511-network-authentication-required) | Network Authentication Required |

---

## 🔍 Detailed Explanations

### 100 Continue
The server has received the request headers and the client should proceed to send the request body.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)

### 101 Switching Protocols
The requester has asked the server to switch protocols and the server has agreed to do so.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)

### 102 Processing
The server has received and is processing the request, but no response is available yet.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102)

### 200 OK
The request has succeeded.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

### 201 Created
The request has been fulfilled and a new resource has been created.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)

### 202 Accepted
The request has been accepted for processing, but the processing has not been completed.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)

### 203 Non-Authoritative Information
The request has been successfully processed, but is returning information that may be from another source.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)

### 204 No Content
The server successfully processed the request, but is not returning any content.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)

### 205 Reset Content
The server successfully processed the request, but is not returning any content and requires that the requester reset the document view.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205)

### 206 Partial Content
The server is delivering only part of the resource due to a range header sent by the client.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)

### 207 Multi-Status
The message body that follows is an XML message and can contain a number of separate response codes.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207)

### 208 Already Reported
The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208)

### 226 IM Used
The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226)

### 300 Multiple Choices
There are multiple options for the resource that the client may follow.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)

### 301 Moved Permanently
The resource has been moved permanently to a new URL.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)

### 302 Found
The resource has been found at a different URL temporarily.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)

### 303 See Other
The response to the request can be found under another URL using a GET method.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)

### 304 Not Modified
The resource has not been modified since the version specified by the request headers.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)

### 305 Use Proxy
The requested resource is available only through a proxy, the address for which is provided in the response.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305)

### 306 Switch Proxy
No longer used. Originally meant "Subsequent requests should use the specified proxy."  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306)

### 307 Temporary Redirect
The request should be repeated with another URL, but future requests can still use the original URL.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)

### 308 Permanent Redirect
The request and all future requests should be repeated using another URL.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)

### 400 Bad Request
The server could not understand the request due to invalid syntax.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)

### 401 Unauthorized
The client must authenticate itself to get the requested response.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)

### 402 Payment Required
Reserved for future use.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)

### 403 Forbidden
The client does not have access rights to the content.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)

### 404 Not Found
The server can not find the requested resource.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)

### 405 Method Not Allowed
The request method is known by the server but has been disabled and cannot be used.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405)

### 406 Not Acceptable
The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406)

### 407 Proxy Authentication Required
The client must first authenticate itself with the proxy.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407)

### 408 Request Timeout
The server would like to shut down this unused connection.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408)

### 409 Conflict
The request conflicts with the current state of the server.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409)

### 410 Gone
The content has been permanently deleted from the server, with no forwarding address.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410)

### 411 Length Required
The server refuses to accept the request without a defined Content-Length header.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411)

### 412 Precondition Failed
The client has indicated preconditions in its headers which the server does not meet.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412)

### 413 Payload Too Large
The request entity is larger than limits defined by the server.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413)

### 414 URI Too Long
The URI requested by the client is longer than the server is willing to interpret.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414)

### 415 Unsupported Media Type
The media format of the requested data is not supported by the server.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415)

### 416 Range Not Satisfiable
The range specified by the Range header field in the request cannot be fulfilled.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416)

### 417 Expectation Failed
The expectation given in the request's Expect header could not be met.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417)

### 418 I'm a teapot
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, and is not expected to be implemented by actual HTTP servers.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)

### 421 Misdirected Request
The request was directed at a server that is not able to produce a response.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421)

### 422 Unprocessable Entity
The request was well-formed but was unable to be followed due to semantic errors.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422)

### 423 Locked
The resource that is being accessed is locked.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423)

### 424 Failed Dependency
The request failed due to failure of a previous request.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424)

### 426 Upgrade Required
The client should switch to a different protocol.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426)

### 428 Precondition Required
The origin server requires the request to be conditional.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428)

### 429 Too Many Requests
The user has sent too many requests in a given amount of time.  
[� Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429)

### 431 Request Header Fields Too Large
The server is unwilling to process the request because its header fields are too large.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431)

### 451 Unavailable For Legal Reasons
The user requests an illegal resource, such as a web page censored by a government.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451)

### 500 Internal Server Error
The server has encountered a situation it doesn't know how to handle.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)

### 501 Not Implemented
The request method is not supported by the server and cannot be handled.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501)

### 502 Bad Gateway
The server, while acting as a gateway or proxy, received an invalid response from the upstream server.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502)

### 503 Service Unavailable
The server is not ready to handle the request.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503)

### 504 Gateway Timeout
The server is acting as a gateway and cannot get a response in time.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504)

### 505 HTTP Version Not Supported
The HTTP version used in the request is not supported by the server.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505)

### 506 Variant Also Negotiates
The server has an internal configuration error.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506)

### 507 Insufficient Storage
The server is unable to store the representation needed to complete the request.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507)

### 508 Loop Detected
The server detected an infinite loop while processing a request.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508)

### 510 Not Extended
Further extensions to the request are required for the server to fulfill it.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510)

### 511 Network Authentication Required
The client needs to authenticate to gain network access.  
[📖 Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511)

---

## 🤝 Contributing

Contributions are welcome! If you find a missing status code or want to improve the UI:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ for the Developer Community
</p>
