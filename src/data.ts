export interface StatusCode {
    code: number;
    title: string;
    description: string;
    category: 'Informational' | 'Success' | 'Redirection' | 'Client Error' | 'Server Error' | 'WebDAV' | 'Unofficial';
    isUnofficial?: boolean;
    details: string;
    useCase?: string;
    solution?: string;
    codeSnippet: string;
}

export const statusCodes: StatusCode[] = [
    // 1xx: Informational
    {
        code: 100,
        title: 'Continue',
        description: 'The server has received the request headers and the client should proceed to send the request body.',
        category: 'Informational',
        details: 'This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.',
        useCase: 'Used when a client sends a request with the Expect: 100-continue header, asking the server if it can handle the request before sending a large payload.',
        solution: 'Client should proceed with sending the request body.',
        codeSnippet: `HTTP/1.1 100 Continue`
    },
    {
        code: 101,
        title: 'Switching Protocols',
        description: 'The requester has asked the server to switch protocols and the server has agreed to do so.',
        category: 'Informational',
        details: 'The server is switching protocols as requested by the client. The Upgrade header field in the request indicates the protocol to which the server is switching.',
        useCase: 'Commonly used when upgrading a standard HTTP connection to a WebSocket connection.',
        codeSnippet: `HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade`
    },
    {
        code: 102,
        title: 'Processing',
        description: 'The server has received and is processing the request, but no response is available yet.',
        category: 'WebDAV',
        details: 'This code is a WebDAV extension. It indicates that the server has accepted the complete request, but has not yet completed it.',
        useCase: 'Used when a WebDAV request may take a longer time to complete, preventing the client from timing out.',
        codeSnippet: `HTTP/1.1 102 Processing`
    },
    {
        code: 103,
        title: 'Early Hints',
        description: 'Used to return some response headers before final HTTP message.',
        category: 'Informational',
        details: 'This status code allows the user agent to start preloading resources while the server prepares a response. It is primarily used with the Link header.',
        useCase: 'Optimizing page load times by telling the browser to download CSS or JS files while the server is still rendering the HTML.',
        codeSnippet: `HTTP/1.1 103 Early Hints
Link: </style.css>; rel=preload; as=style`
    },

    // 2xx: Success
    {
        code: 200,
        title: 'OK',
        description: 'The request has succeeded.',
        category: 'Success',
        details: 'The standard response for successful HTTP requests. The actual meaning depends on the request method used (GET, POST, PUT, etc.).',
        useCase: 'Used for most successful GET requests (page loads) and API calls that return data.',
        codeSnippet: `HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>...</html>`
    },
    {
        code: 201,
        title: 'Created',
        description: 'The request has been fulfilled and a new resource has been created.',
        category: 'Success',
        details: 'The request has been fulfilled and has resulted in one or more new resources being created.',
        useCase: 'Commonly returned by POST or PUT requests in REST APIs when a new user, post, or item is successfully created.',
        codeSnippet: `HTTP/1.1 201 Created
Location: /api/users/123

{
  "id": 123,
  "name": "New User"
}`
    },
    {
        code: 202,
        title: 'Accepted',
        description: 'The request has been accepted for processing, but the processing has not been completed.',
        category: 'Success',
        details: 'The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon.',
        useCase: 'Used for long-running asynchronous background tasks, like video encoding or bulk data importation.',
        codeSnippet: `HTTP/1.1 202 Accepted
Location: /api/tasks/status/987`
    },
    {
        code: 203,
        title: 'Non-Authoritative Information',
        description: 'The request has been successfully processed, but is returning information that may be from another source.',
        category: 'Success',
        details: 'The returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.',
        useCase: 'Often used by proxies or intermediate servers that modify the response data.',
        codeSnippet: `HTTP/1.1 203 Non-Authoritative Information
Content-Type: application/json

{ "data": "modified_by_proxy" }`
    },
    {
        code: 204,
        title: 'No Content',
        description: 'The server successfully processed the request, but is not returning any content.',
        category: 'Success',
        details: 'The server has successfully fulfilled the request and there is no additional content to send in the response payload body.',
        useCase: 'Ideally used for DELETE requests or updating resources where the client does not need the updated content returned.',
        codeSnippet: `HTTP/1.1 204 No Content`
    },
    {
        code: 205,
        title: 'Reset Content',
        description: 'The server successfully processed the request, but is not returning any content and requires that the requester reset the document view.',
        category: 'Success',
        details: 'The server indicates that the user agent should reset the document which sent this request.',
        useCase: 'Used to clear a form after submission without navigating away.',
        codeSnippet: `HTTP/1.1 205 Reset Content`
    },
    {
        code: 206,
        title: 'Partial Content',
        description: 'The server is delivering only part of the resource due to a range header sent by the client.',
        category: 'Success',
        details: 'The server is delivering only part of the resource. This is used by tools like wget and for invalidating the cache of a resource.',
        useCase: 'Essential for video streaming and resuming interrupted file downloads.',
        codeSnippet: `HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024`
    },
    {
        code: 207,
        title: 'Multi-Status',
        description: 'The message body that follows is an XML message and can contain a number of separate response codes.',
        category: 'WebDAV',
        details: 'A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.',
        useCase: 'Used in WebDAV when checking the status of multiple files or folders in a single request.',
        codeSnippet: `HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"

<d:multistatus xmlns:d="DAV:">
  <d:response>...</d:response>
</d:multistatus>`
    },
    {
        code: 208,
        title: 'Already Reported',
        description: 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.',
        category: 'WebDAV',
        details: 'Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.',
        useCase: 'WebDAV optimization to reduce redundancy in responses.',
        codeSnippet: `HTTP/1.1 208 Already Reported`
    },
    {
        code: 226,
        title: 'IM Used',
        description: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
        category: 'Success',
        details: 'The server has fulfilled the GET request, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
        useCase: 'Used in the Delta encoding in HTTP, allowing a client to ask for only the changes (deltas) to a resource.',
        codeSnippet: `HTTP/1.1 226 IM Used
IM: delta`
    },

    // 3xx: Redirection
    {
        code: 300,
        title: 'Multiple Choices',
        description: 'There are multiple options for the resource that the client may follow.',
        category: 'Redirection',
        details: 'The request has more than one possible response. The user agent or user should choose one of them.',
        useCase: 'Rarely used. Could be used to present different file format options for a video or document.',
        codeSnippet: `HTTP/1.1 300 Multiple Choices
Content-Type: text/html

<ul>
  <li><a href="/video.mp4">MP4</a></li>
  <li><a href="/video.webm">WebM</a></li>
</ul>`
    },
    {
        code: 301,
        title: 'Moved Permanently',
        description: 'The resource has been moved permanently to a new URL.',
        category: 'Redirection',
        details: 'The URL of the requested resource has been changed permanently. The new URL is given in the response.',
        useCase: 'Essential for SEO when migrating a website or changing URL structures. Passes "link juice" to the new URL.',
        codeSnippet: `HTTP/1.1 301 Moved Permanently
Location: https://www.new-url.com/page`
    },
    {
        code: 302,
        title: 'Found',
        description: 'The resource has been found at a different URL temporarily.',
        category: 'Redirection',
        details: 'This response code means that the URI of requested resource has been changed temporarily. Functionally, this is a "Moved Temporarily".',
        useCase: 'Used for temporary redirects, such as during maintenance or A/B testing.',
        codeSnippet: `HTTP/1.1 302 Found
Location: /temporary-maintenance-page`
    },
    {
        code: 303,
        title: 'See Other',
        description: 'The response to the request can be found under another URL using a GET method.',
        category: 'Redirection',
        details: 'The server acts as if it has received the request and directs the client to a different URL to get the response. Used to prevent double form submissions.',
        useCase: 'Commonly used after a POST request (Post/Redirect/Get pattern) to redirect the user to a results page.',
        codeSnippet: `HTTP/1.1 303 See Other
Location: /results`
    },
    {
        code: 304,
        title: 'Not Modified',
        description: 'The resource has not been modified since the version specified by the request headers.',
        category: 'Redirection',
        details: 'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.',
        useCase: 'Crucial for web performance and saving bandwidth. Used when the client sends headers like If-Modified-Since.',
        codeSnippet: `HTTP/1.1 304 Not Modified
ETag: "686897696a7c876b7e"`
    },
    {
        code: 305,
        title: 'Use Proxy',
        description: 'The requested resource is available only through a proxy.',
        category: 'Redirection',
        details: 'The requested resource is available only through a proxy, the address for which is provided in the response.',
        useCase: 'Deprecated due to security concerns regarding in-band configuration of a proxy.',
        codeSnippet: `HTTP/1.1 305 Use Proxy
Location: http://proxy.example.org:8080`
    },
    {
        code: 306,
        title: 'Switch Proxy',
        description: 'No longer used.',
        category: 'Redirection',
        details: 'Originally meant "Subsequent requests should use the specified proxy".',
        useCase: 'No longer used in modern HTTP.',
        codeSnippet: `HTTP/1.1 306 Switch Proxy`
    },
    {
        code: 307,
        title: 'Temporary Redirect',
        description: 'The request should be repeated with another URL, but future requests can still use the original URL.',
        category: 'Redirection',
        details: 'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.',
        useCase: 'Use this instead of 302 when you want to ensure the HTTP method (e.g., POST) does not change to GET after the redirect.',
        codeSnippet: `HTTP/1.1 307 Temporary Redirect
Location: /login`
    },
    {
        code: 308,
        title: 'Permanent Redirect',
        description: 'The request and all future requests should be repeated using another URL.',
        category: 'Redirection',
        details: 'This means that the resource is now permanently located at another URI. Like 307, this status code does not allow changing the HTTP Method.',
        useCase: 'Use this instead of 301 when you want to ensure the HTTP method (e.g., POST) does not change to GET after the redirect.',
        codeSnippet: `HTTP/1.1 308 Permanent Redirect
Location: https://new-site.com/resource`
    },

    // 4xx: Client Error
    {
        code: 400,
        title: 'Bad Request',
        description: 'The server could not understand the request due to invalid syntax.',
        category: 'Client Error',
        details: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
        useCase: 'Sending invalid JSON, missing required fields in a form, or malformed parameters.',
        solution: 'Check your request syntax, headers, and body. Ensure you are sending valid JSON or form data.',
        codeSnippet: `HTTP/1.1 400 Bad Request
Content-Type: application/json

{ "error": "Invalid JSON syntax" }`
    },
    {
        code: 401,
        title: 'Unauthorized',
        description: 'The client must authenticate itself to get the requested response.',
        category: 'Client Error',
        details: 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.',
        useCase: 'Accessing an API endpoint without a valid token or with an expired session.',
        solution: 'Provide valid authentication credentials (e.g., Bearer token, login cookie).',
        codeSnippet: `HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="Access to API"`
    },
    {
        code: 402,
        title: 'Payment Required',
        description: 'Reserved for future use.',
        category: 'Client Error',
        details: 'This code is reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme.',
        useCase: 'Rarely used, but some APIs use it to indicate a subscription has expired or a payment limit was reached.',
        solution: 'Check billing status or subscription limits.',
        codeSnippet: `HTTP/1.1 402 Payment Required
Content-Type: application/json

{ "error": "Daily request limit reached" }`
    },
    {
        code: 403,
        title: 'Forbidden',
        description: 'The client does not have access rights to the content.',
        category: 'Client Error',
        details: 'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client\'s identity is known to the server.',
        useCase: 'A logged-in user trying to access an ADMIN-only page.',
        solution: 'Check user permissions and roles. Ensure the user is authorized to perform this action.',
        codeSnippet: `HTTP/1.1 403 Forbidden`
    },
    {
        code: 404,
        title: 'Not Found',
        description: 'The server can not find the requested resource.',
        category: 'Client Error',
        details: 'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.',
        useCase: 'Visiting a non-existent page, mistyped URL, or querying an API for ID that doesn\'t exist.',
        solution: 'Check the URL for typos. detailed checking if the resource ID is correct.',
        codeSnippet: `HTTP/1.1 404 Not Found`
    },
    {
        code: 405,
        title: 'Method Not Allowed',
        description: 'The request method is known by the server but has been disabled and cannot be used.',
        category: 'Client Error',
        details: 'The request method is known by the server but has been disabled and cannot be used. For example, an API may not allow calling DELETE to remove a resource.',
        useCase: 'Trying to send a POST request to a read-only (GET) endpoint.',
        solution: 'Check the allowed HTTP methods for this endpoint (often returned in the Allow header).',
        codeSnippet: `HTTP/1.1 405 Method Not Allowed
Allow: GET, HEAD`
    },
    {
        code: 406,
        title: 'Not Acceptable',
        description: 'The server cannot produce a response matching the list of acceptable values defined in the request.',
        category: 'Client Error',
        details: 'The server cannot produce a response matching the list of acceptable values defined in the request\'s proactive content negotiation headers (Accept, Accept-Language, etc.).',
        useCase: 'Requesting "application/xml" data from an API that only supports "application/json".',
        solution: 'Adjust the Accept headers to match what the server supports.',
        codeSnippet: `HTTP/1.1 406 Not Acceptable`
    },
    {
        code: 407,
        title: 'Proxy Authentication Required',
        description: 'The client must first authenticate itself with the proxy.',
        category: 'Client Error',
        details: 'This is similar to 401, but it indicates that the client must first authenticate itself with the proxy.',
        useCase: 'Using a corporate proxy that requires login.',
        solution: 'Provide authentication credentials to the proxy server.',
        codeSnippet: `HTTP/1.1 407 Proxy Authentication Required
Proxy-Authenticate: Basic`
    },
    {
        code: 408,
        title: 'Request Timeout',
        description: 'The server would like to shut down this unused connection.',
        category: 'Client Error',
        details: 'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.',
        useCase: 'Slow internet connection causing a request to take too long to arrive at the server.',
        solution: 'Check network interaction speed. If you are uploading a large file, ensure the server timeout is high enough.',
        codeSnippet: `HTTP/1.1 408 Request Timeout`
    },
    {
        code: 409,
        title: 'Conflict',
        description: 'The request conflicts with the current state of the server.',
        category: 'Client Error',
        details: 'This response is sent when a request conflicts with the current state of the server.',
        useCase: 'Trying to create a user with an email address that already exists.',
        solution: 'Resolve the conflict (e.g., use a different email) and retry.',
        codeSnippet: `HTTP/1.1 409 Conflict
Content-Type: application/json

{ "error": "Email already exists" }`
    },
    {
        code: 410,
        title: 'Gone',
        description: 'The content has been permanently deleted from the server.',
        category: 'Client Error',
        details: 'This response is sent when the requested content has been permanently deleted from server, with no forwarding address.',
        useCase: 'Accessing an old API version that has been fully decomissioned.',
        solution: 'Remove references to this resource; it is not coming back.',
        codeSnippet: `HTTP/1.1 410 Gone`
    },
    {
        code: 411,
        title: 'Length Required',
        description: 'The server refuses to accept the request without a defined Content-Length header.',
        category: 'Client Error',
        details: 'Server rejected the request because the Content-Length header field is not defined and the server requires it.',
        useCase: 'Sending a POST request without satisfying the server\'s requirement for a known body size.',
        solution: 'Examples: Set the Content-Length header.',
        codeSnippet: `HTTP/1.1 411 Length Required`
    },
    {
        code: 412,
        title: 'Precondition Failed',
        description: 'The client has indicated preconditions in its headers which the server does not meet.',
        category: 'Client Error',
        details: 'The client has indicated preconditions in its headers which the server does not meet.',
        useCase: 'Used with conditional requests like If-Match or If-Unmodified-Since to preventing "lost updates".',
        solution: 'Fetch the latest version of the resource and try the update again.',
        codeSnippet: `HTTP/1.1 412 Precondition Failed`
    },
    {
        code: 413,
        title: 'Payload Too Large',
        description: 'The request entity is larger than limits defined by the server.',
        category: 'Client Error',
        details: 'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.',
        useCase: 'Uploading a file that is too large (e.g., > 10MB) when the server limit is lower.',
        solution: 'Reduce payload size or increase the limit on the server configuration.',
        codeSnippet: `HTTP/1.1 413 Payload Too Large`
    },
    {
        code: 414,
        title: 'URI Too Long',
        description: 'The URI requested by the client is longer than the server is willing to interpret.',
        category: 'Client Error',
        details: 'The URI requested by the client is longer than the server is willing to interpret.',
        useCase: 'Making a GET request with an excessive number of query parameters.',
        solution: 'Switch to POST request to send data in the body instead of the URL.',
        codeSnippet: `HTTP/1.1 414 URI Too Long`
    },
    {
        code: 415,
        title: 'Unsupported Media Type',
        description: 'The media format of the requested data is not supported by the server.',
        category: 'Client Error',
        details: 'The media format of the requested data is not supported by the server, so the server is rejecting the request.',
        useCase: 'Uploading an image as "image/bmp" when the server only accepts "image/jpeg" or "image/png".',
        solution: 'Ensure the Content-Type header matches the file format and that the format is supported by the server.',
        codeSnippet: `HTTP/1.1 415 Unsupported Media Type`
    },
    {
        code: 416,
        title: 'Range Not Satisfiable',
        description: 'The range specified by the Range header field in the request cannot be fulfilled.',
        category: 'Client Error',
        details: 'The range specified by the Range header field in the request cannot be fulfilled; it\'s possible that the range is outside the size of the target URI\'s data.',
        useCase: 'Requesting bytes 1000-2000 of a file that is only 500 bytes long.',
        solution: 'Fix the Range header values to be within valid bounds.',
        codeSnippet: `HTTP/1.1 416 Range Not Satisfiable
Content-Range: bytes */500`
    },
    {
        code: 417,
        title: 'Expectation Failed',
        description: 'The expectation given in the request\'s Expect header could not be met.',
        category: 'Client Error',
        details: 'This response code means the expectation given in the request\'s Expect header could not be met by the server.',
        useCase: 'A client sends "Expect: 100-continue" but the server doesn\'t support this flow.',
        solution: 'Remove the Expect header.',
        codeSnippet: `HTTP/1.1 417 Expectation Failed`
    },
    {
        code: 418,
        title: 'I\'m a teapot',
        description: 'The server refuses the attempt to brew coffee with a teapot.',
        category: 'Client Error',
        details: 'The server refuses the attempt to brew coffee with a teapot. This error is a reference to Hyper Text Coffee Pot Control Protocol which was an April Fools\' joke in 1998.',
        useCase: 'Used as an easter egg in some APIs.',
        solution: 'Brew tea instead.',
        codeSnippet: `HTTP/1.1 418 I'm a teapot`
    },
    {
        code: 421,
        title: 'Misdirected Request',
        description: 'The request was directed at a server that is not able to produce a response.',
        category: 'Client Error',
        details: 'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.',
        useCase: 'Connecting to a server that doesn\'t own the SSL certificate for the requested domain.',
        solution: 'Ensure your DNS and routing configurations are correct.',
        codeSnippet: `HTTP/1.1 421 Misdirected Request`
    },
    {
        code: 422,
        title: 'Unprocessable Entity',
        description: 'The request was well-formed but was unable to be followed due to semantic errors.',
        category: 'WebDAV',
        details: 'The request was well-formed but was unable to be followed due to semantic errors.',
        useCase: 'Common in validation errors (e.g., password too short) where the syntax is correct (JSON is valid) but the logic fails.',
        solution: 'Check validation messages returned by the server and correct the input data.',
        codeSnippet: `HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json

{ "error": "Password must be at least 8 characters" }`
    },
    {
        code: 423,
        title: 'Locked',
        description: 'The resource that is being accessed is locked.',
        category: 'WebDAV',
        details: 'The resource that is being accessed is locked.',
        useCase: 'A file is currently being edited by another user in a WebDAV environment.',
        solution: 'Wait for the lock to be released or unlock the resource.',
        codeSnippet: `HTTP/1.1 423 Locked`
    },
    {
        code: 424,
        title: 'Failed Dependency',
        description: 'The request failed due to failure of a previous request.',
        category: 'WebDAV',
        details: 'The request failed due to failure of a previous request.',
        useCase: 'In a WebDAV batch operation (PROPPATCH), if one action fails, subsequent dependent actions may fail with 424.',
        codeSnippet: `HTTP/1.1 424 Failed Dependency`
    },
    {
        code: 425,
        title: 'Too Early',
        description: 'Indicates that the server is unwilling to risk processing a request that might be replayed.',
        category: 'Client Error',
        details: 'Indicates that the server is unwilling to risk processing a request that might be replayed.',
        useCase: 'Related to 0-RTT (Zero Round Trip Time) data in TLS 1.3.',
        solution: 'Retry the request.',
        codeSnippet: `HTTP/1.1 425 Too Early`
    },
    {
        code: 426,
        title: 'Upgrade Required',
        description: 'The client should switch to a different protocol.',
        category: 'Client Error',
        details: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
        useCase: 'Server requiring HTTP/2 or WebSockets.',
        solution: 'Upgrade the protocol (e.g. use HTTPS or a newer HTTP version) requested in the Upgrade header.',
        codeSnippet: `HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0`
    },
    {
        code: 428,
        title: 'Precondition Required',
        description: 'The origin server requires the request to be conditional.',
        category: 'Client Error',
        details: 'The origin server requires the request to be conditional. This response is intended to prevent the "lost update" problem, where a client GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.',
        useCase: 'API requiring If-Match headers for updates.',
        solution: 'Add the required conditional headers (e.g. If-Match).',
        codeSnippet: `HTTP/1.1 428 Precondition Required`
    },
    {
        code: 429,
        title: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time.',
        category: 'Client Error',
        details: 'The user has sent too many requests in a given amount of time ("rate limiting").',
        useCase: 'Exceeding API rate limits (e.g., 60 requests per minute).',
        solution: 'Stop sending requests and wait for the time specified in the Retry-After header.',
        codeSnippet: `HTTP/1.1 429 Too Many Requests
Retry-After: 60`
    },
    {
        code: 431,
        title: 'Request Header Fields Too Large',
        description: 'The server is unwilling to process the request because its header fields are too large.',
        category: 'Client Error',
        details: 'The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.',
        useCase: 'Cookies or authorization tokens have become bloat to large sizes.',
        solution: 'Clear cookies or reduce header size.',
        codeSnippet: `HTTP/1.1 431 Request Header Fields Too Large`
    },
    {
        code: 451,
        title: 'Unavailable For Legal Reasons',
        description: 'The user requests an illegal resource, such as a web page censored by a government.',
        category: 'Client Error',
        details: 'The user requests an illegal resource, such as a web page censored by a government.',
        useCase: 'Content blocked due to copyright takedown or government censorship.',
        solution: 'Access is denied for legal reasons.',
        codeSnippet: `HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spooky-government.org/censorship-notice>; rel="blocked-by"`
    },

    // 5xx: Server Error
    {
        code: 500,
        title: 'Internal Server Error',
        description: 'The server has encountered a situation it doesn\'t know how to handle.',
        category: 'Server Error',
        details: 'The server has encountered a situation it doesn\'t know how to handle. This is a generic catch-all error.',
        useCase: 'Code crashes, database connection failures, or unhandled exceptions.',
        solution: 'Check server logs (error.log) to identify the specific crash or configuration error.',
        codeSnippet: `HTTP/1.1 500 Internal Server Error`
    },
    {
        code: 501,
        title: 'Not Implemented',
        description: 'The request method is not supported by the server and cannot be handled.',
        category: 'Server Error',
        details: 'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.',
        useCase: 'Trying a new HTTP method that the server does not recognize.',
        solution: 'Verify the method used is standard and supported by the server software.',
        codeSnippet: `HTTP/1.1 501 Not Implemented`
    },
    {
        code: 502,
        title: 'Bad Gateway',
        description: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.',
        category: 'Server Error',
        details: 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
        useCase: 'A reverse proxy (like Nginx) cannot connect to the backend application (like Node.js or PHP-FPM).',
        solution: 'Check the status of the upstream server/application.',
        codeSnippet: `HTTP/1.1 502 Bad Gateway`
    },
    {
        code: 503,
        title: 'Service Unavailable',
        description: 'The server is not ready to handle the request.',
        category: 'Server Error',
        details: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.',
        useCase: 'Server is overwhelmed with traffic or shut down for maintenance.',
        solution: 'Retry after a delay. Check system load and scaling.',
        codeSnippet: `HTTP/1.1 503 Service Unavailable
Retry-After: 3600`
    },
    {
        code: 504,
        title: 'Gateway Timeout',
        description: 'The server is acting as a gateway and cannot get a response in time.',
        category: 'Server Error',
        details: 'This error response is given when the server is acting as a gateway and cannot get a response in time.',
        useCase: 'The upstream application is taking too long to reply (e.g. a slow database query) and the proxy timed out.',
        solution: 'Optimize the backend performance or increase the timeout limit on the gateway.',
        codeSnippet: `HTTP/1.1 504 Gateway Timeout`
    },
    {
        code: 505,
        title: 'HTTP Version Not Supported',
        description: 'The HTTP version used in the request is not supported by the server.',
        category: 'Server Error',
        details: 'The HTTP version used in the request is not supported by the server.',
        useCase: 'Requesting HTTP/2.0 from an old server that only supports HTTP/1.1.',
        solution: 'Use a supported protocol version.',
        codeSnippet: `HTTP/1.1 505 HTTP Version Not Supported`
    },
    {
        code: 506,
        title: 'Variant Also Negotiates',
        description: 'The server has an internal configuration error.',
        category: 'Server Error',
        details: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
        useCase: 'Circular reference in content negotiation configuration.',
        solution: 'Fix server configuration regarding content negotiation.',
        codeSnippet: `HTTP/1.1 506 Variant Also Negotiates`
    },
    {
        code: 507,
        title: 'Insufficient Storage',
        description: 'The server is unable to store the representation needed to complete the request.',
        category: 'WebDAV',
        details: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
        useCase: 'Disk full on server.',
        solution: 'Free up disk space on the server.',
        codeSnippet: `HTTP/1.1 507 Insufficient Storage`
    },
    {
        code: 508,
        title: 'Loop Detected',
        description: 'The server detected an infinite loop while processing a request.',
        category: 'WebDAV',
        details: 'The server detected an infinite loop while processing the request.',
        useCase: 'Infinite loop in WebDAV references.',
        solution: 'Check for circular dependencies in WebDAV resources.',
        codeSnippet: `HTTP/1.1 508 Loop Detected`
    },
    {
        code: 509,
        title: 'Bandwidth Limit Exceeded',
        description: 'The server bandwidth limit has been exceeded.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'This status code is not specified in any RFCs. Its use is unknown.',
        useCase: 'Shared hosting environments often use this to shut down a site that has exceeded its monthly bandwidth quota.',
        solution: 'Wait until the limit resets (usually next month) or upgrade the hosting plan.',
        codeSnippet: `HTTP/1.1 509 Bandwidth Limit Exceeded`
    },
    {
        code: 510,
        title: 'Not Extended',
        description: 'Further extensions to the request are required for the server to fulfill it.',
        category: 'Server Error',
        details: 'Further extensions to the request are required for the server to fulfill it.',
        useCase: 'Obsolete; planned for HTTP extensions that were not widely adopted.',
        solution: 'Check server documentation.',
        codeSnippet: `HTTP/1.1 510 Not Extended`
    },
    {
        code: 511,
        title: 'Network Authentication Required',
        description: 'The client needs to authenticate to gain network access.',
        category: 'Server Error',
        details: 'The 511 status code indicates that the client needs to authenticate to gain network access.',
        useCase: 'Captive portals (e.g., airport WiFi) requiring you to login before accessing the internet.',
        solution: 'Login to the network portal.',
        codeSnippet: `HTTP/1.1 511 Network Authentication Required`
    },

    // Unofficial / Custom
    {
        code: 521,
        title: 'Web Server Is Down',
        description: 'The web server is down. Used by Cloudflare.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'Cloudflare cannot establish a connection to your origin web server.',
        useCase: 'Origin server is offline or refusing connections on port 80/443.',
        solution: 'Ensure your web server software (Apache, Nginx) is running and firewall allows connections.',
        codeSnippet: `HTTP/1.1 521 Web Server Is Down`
    },
    {
        code: 522,
        title: 'Connection Timed Out',
        description: 'Cloudflare could not negotiate a TCP handshake with the origin server.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'Cloudflare attempted to connect to the origin server but the request timed out.',
        useCase: 'Firewall blocking Cloudflare IPs or server is overloaded.',
        solution: 'Whitelist Cloudflare IPs in your firewall and check server load.',
        codeSnippet: `HTTP/1.1 522 Connection Timed Out`
    },
    {
        code: 523,
        title: 'Origin Is Unreachable',
        description: 'Cloudflare could not reach the origin server.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect or routing fails.',
        useCase: 'Incorrect DNS settings or network routing issues.',
        solution: 'Verify DNS A records and network routes.',
        codeSnippet: `HTTP/1.1 523 Origin Is Unreachable`
    },
    {
        code: 525,
        title: 'SSL Handshake Failed',
        description: 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
        useCase: 'Origin server has an invalid, expired, or self-signed certificate that Cloudflare doesn\'t trust.',
        solution: 'Install a valid SSL certificate on the origin server.',
        codeSnippet: `HTTP/1.1 525 SSL Handshake Failed`
    },
    {
        code: 529,
        title: 'Site is Overloaded',
        description: 'The service is overloaded. Used by Qualys.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'This code is used by the Qualys SSLLabs server testing API to signal that the site is currently overloaded.',
        useCase: 'SSLLabs testing servers are too busy.',
        solution: 'Try the test again later.',
        codeSnippet: `HTTP/1.1 529 Site is Overloaded`
    },
    {
        code: 530,
        title: 'Site is Frozen',
        description: 'The site has been frozen. Used by Pantheon.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.',
        useCase: 'Accessing a free tier dev site that hasn\'t been used in a while.',
        solution: 'Log in to the dashboard to unfreeze the site.',
        codeSnippet: `HTTP/1.1 530 Site is Frozen`
    },
    {
        code: 598,
        title: 'Network Read Timeout Error',
        description: 'Used by some HTTP proxies to signal a network read timeout behind the proxy.',
        category: 'Unofficial',
        isUnofficial: true,
        details: 'This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
        useCase: 'Proxy timeout.',
        solution: 'Check network connectivity and timeout settings.',
        codeSnippet: `HTTP/1.1 598 Network Read Timeout Error`
    }
];
