# Workflow assessment launch

Built from current main, preserving its newer B2B positioning. The assessment begins with a 30-minute introduction. Scope, timing, and fees are agreed before paid work; no price or delivery guarantee is invented.

## Email setup

Set RESEND_API_KEY, CONTACT_FROM_EMAIL (a verified Resend sender), and CONTACT_TO_EMAIL in the deployment environment. The assessment shows an email link until all three are configured. The shared contact API returns 503 when unconfigured and 502 if delivery fails; it never logs personal information or returns a false success.

After configuration, send a controlled inquiry, confirm inbox receipt and reply-to, and verify the error state. Provider acceptance is not a guarantee of inbox delivery. Enable hosting-level rate limiting for /api/contact before paid traffic.

## Review before public launch

Confirm the destination inbox and actual assessment scope/fee. Review existing legacy routes and pricing separately before promoting them. Existing PRs #1 and #2 are alternative older designs and should not be merged on top of this branch.
