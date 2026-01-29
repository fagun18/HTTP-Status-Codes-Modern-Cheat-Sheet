export interface StatusCode {
  code: number;
  title: string;
  description: string;
  category: 'Informational' | 'Success' | 'Redirection' | 'Client Error' | 'Server Error' | 'WebDAV';
}

export const statusCodes: StatusCode[] = [
  // 1xx
  { code: 100, title: 'Continue', description: 'The server has received the request headers and the client should proceed to send the request body.', category: 'Informational' },
  { code: 101, title: 'Switching Protocols', description: 'The requester has asked the server to switch protocols and the server has agreed to do so.', category: 'Informational' },
  
  // 2xx
  { code: 200, title: 'OK', description: 'The request has succeeded.', category: 'Success' },
  { code: 201, title: 'Created', description: 'The request has been fulfilled and a new resource has been created.', category: 'Success' },
  { code: 202, title: 'Accepted', description: 'The request has been accepted for processing, but the processing has not been completed.', category: 'Success' },
  { code: 203, title: 'Non-Authoritative Information', description: 'The request has been successfully processed, but is returning information that may be from another source.', category: 'Success' },
  { code: 204, title: 'No Content', description: 'The server successfully processed the request, but is not returning any content.', category: 'Success' },
  { code: 205, title: 'Reset Content', description: 'The server successfully processed the request, but is not returning any content and requires that the requester reset the document view.', category: 'Success' },
  { code: 206, title: 'Partial Content', description: 'The server is delivering only part of the resource due to a range header sent by the client.', category: 'Success' },
  { code: 226, title: 'IM Used', description: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.', category: 'Success' },

  // 3xx
  { code: 300, title: 'Multiple Choices', description: 'There are multiple options for the resource that the client may follow.', category: 'Redirection' },
  { code: 301, title: 'Moved Permanently', description: 'The resource has been moved permanently to a new URL.', category: 'Redirection' },
  { code: 302, title: 'Found', description: 'The resource has been found at a different URL temporarily.', category: 'Redirection' },
  { code: 303, title: 'See Other', description: 'The response to the request can be found under another URL using a GET method.', category: 'Redirection' },
  { code: 304, title: 'Not Modified', description: 'The resource has not been modified since the version specified by the request headers.', category: 'Redirection' },
  { code: 305, title: 'Use Proxy', description: 'The requested resource is available only through a proxy, the address for which is provided in the response.', category: 'Redirection' },
  { code: 306, title: 'Switch Proxy', description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."', category: 'Redirection' },
  { code: 307, title: 'Temporary Redirect', description: 'The request should be repeated with another URL, but future requests can still use the original URL.', category: 'Redirection' },
  { code: 308, title: 'Permanent Redirect', description: 'The request and all future requests should be repeated using another URL.', category: 'Redirection' },

  // 4xx
  { code: 400, title: 'Bad Request', description: 'The server could not understand the request due to invalid syntax.', category: 'Client Error' },
  { code: 401, title: 'Unauthorized', description: 'The client must authenticate itself to get the requested response.', category: 'Client Error' },
  { code: 402, title: 'Payment Required', description: 'Reserved for future use.', category: 'Client Error' },
  { code: 403, title: 'Forbidden', description: 'The client does not have access rights to the content.', category: 'Client Error' },
  { code: 404, title: 'Not Found', description: 'The server can not find the requested resource.', category: 'Client Error' },
  { code: 405, title: 'Method Not Allowed', description: 'The request method is known by the server but has been disabled and cannot be used.', category: 'Client Error' },
  { code: 406, title: 'Not Acceptable', description: 'The server cannot produce a response matching the list of acceptable values defined in the request\'s proactive content negotiation headers.', category: 'Client Error' },
  { code: 407, title: 'Proxy Authentication Required', description: 'The client must first authenticate itself with the proxy.', category: 'Client Error' },
  { code: 408, title: 'Request Timeout', description: 'The server would like to shut down this unused connection.', category: 'Client Error' },
  { code: 409, title: 'Conflict', description: 'The request conflicts with the current state of the server.', category: 'Client Error' },
  { code: 410, title: 'Gone', description: 'The content has been permanently deleted from the server, with no forwarding address.', category: 'Client Error' },
  { code: 411, title: 'Length Required', description: 'The server refuses to accept the request without a defined Content-Length header.', category: 'Client Error' },
  { code: 412, title: 'Precondition Failed', description: 'The client has indicated preconditions in its headers which the server does not meet.', category: 'Client Error' },
  { code: 413, title: 'Payload Too Large', description: 'The request entity is larger than limits defined by the server.', category: 'Client Error' },
  { code: 414, title: 'URI Too Long', description: 'The URI requested by the client is longer than the server is willing to interpret.', category: 'Client Error' },
  { code: 415, title: 'Unsupported Media Type', description: 'The media format of the requested data is not supported by the server.', category: 'Client Error' },
  { code: 416, title: 'Range Not Satisfiable', description: 'The range specified by the Range header field in the request cannot be fulfilled.', category: 'Client Error' },
  { code: 417, title: 'Expectation Failed', description: 'The expectation given in the request\'s Expect header could not be met.', category: 'Client Error' },
  { code: 418, title: 'I\'m a teapot', description: 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, and is not expected to be implemented by actual HTTP servers.', category: 'Client Error' },
  { code: 421, title: 'Misdirected Request', description: 'The request was directed at a server that is not able to produce a response.', category: 'Client Error' },
  { code: 426, title: 'Upgrade Required', description: 'The client should switch to a different protocol.', category: 'Client Error' },
  { code: 428, title: 'Precondition Required', description: 'The origin server requires the request to be conditional.', category: 'Client Error' },
  { code: 429, title: 'Too Many Requests', description: 'The user has sent too many requests in a given amount of time.', category: 'Client Error' },
  { code: 431, title: 'Request Header Fields Too Large', description: 'The server is unwilling to process the request because its header fields are too large.', category: 'Client Error' },
  { code: 451, title: 'Unavailable For Legal Reasons', description: 'The user requests an illegal resource, such as a web page censored by a government.', category: 'Client Error' },

  // 5xx
  { code: 500, title: 'Internal Server Error', description: 'The server has encountered a situation it doesn\'t know how to handle.', category: 'Server Error' },
  { code: 501, title: 'Not Implemented', description: 'The request method is not supported by the server and cannot be handled.', category: 'Server Error' },
  { code: 502, title: 'Bad Gateway', description: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.', category: 'Server Error' },
  { code: 503, title: 'Service Unavailable', description: 'The server is not ready to handle the request.', category: 'Server Error' },
  { code: 504, title: 'Gateway Timeout', description: 'The server is acting as a gateway and cannot get a response in time.', category: 'Server Error' },
  { code: 505, title: 'HTTP Version Not Supported', description: 'The HTTP version used in the request is not supported by the server.', category: 'Server Error' },
  { code: 506, title: 'Variant Also Negotiates', description: 'The server has an internal configuration error.', category: 'Server Error' },
  { code: 510, title: 'Not Extended', description: 'Further extensions to the request are required for the server to fulfill it.', category: 'Server Error' },
  { code: 511, title: 'Network Authentication Required', description: 'The client needs to authenticate to gain network access.', category: 'Server Error' },

  // WebDAV
  { code: 102, title: 'Processing', description: 'The server has received and is processing the request, but no response is available yet.', category: 'WebDAV' },
  { code: 207, title: 'Multi-Status', description: 'The message body that follows is an XML message and can contain a number of separate response codes.', category: 'WebDAV' },
  { code: 208, title: 'Already Reported', description: 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.', category: 'WebDAV' },
  { code: 422, title: 'Unprocessable Entity', description: 'The request was well-formed but was unable to be followed due to semantic errors.', category: 'WebDAV' },
  { code: 423, title: 'Locked', description: 'The resource that is being accessed is locked.', category: 'WebDAV' },
  { code: 424, title: 'Failed Dependency', description: 'The request failed due to failure of a previous request.', category: 'WebDAV' },
  { code: 507, title: 'Insufficient Storage', description: 'The server is unable to store the representation needed to complete the request.', category: 'WebDAV' },
  { code: 508, title: 'Loop Detected', description: 'The server detected an infinite loop while processing a request.', category: 'WebDAV' },
];
