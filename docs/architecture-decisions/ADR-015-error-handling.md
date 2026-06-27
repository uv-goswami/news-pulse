# ADR-015: Error Handling and HTTP Status Code Contract

## Status
Accepted – Implemented

## Context
Consistent, predictable error responses make the API easier to integrate with and debug.

## Decision
All error responses follow a single envelope:
```json
{
  "error": {
    "code": "CLUSTER_NOT_FOUND",
    "message": "No cluster found with id 42",
    "statusCode": 404,
    "requestId": "req-abc123"
  }
}

```

Validation errors include a details array.

## Status code usage:

200 – successful GET / synchronous POST

202 – accepted for async jobs

400 – validation error

401 – missing/invalid token

403 – insufficient permissions

404 – resource not found

409 – conflict (e.g. job already running)

429 – rate limit exceeded

500 – server error

Fastify’s setErrorHandler intercepts all unhandled errors and formats them to this envelope.

## Why
Frontend can switch on error.code rather than parsing messages.

The statusCode in the body mirrors the HTTP status, which is useful for logging.

Consistent across all endpoints.

## Consequences
All route handlers must throw errors with a known shape (or use Fastify’s built‑in error classes).

The error handling middleware is centralised and easy to test.

## Date
2026-06-27