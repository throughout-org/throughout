---
title: "Building an MCP Server for WordPress: What We Learned"
slug: "building-an-mcp-server-for-wordpress-what-we-learned-shipping-easy-mcp-ai"
excerpt: "Practical lessons from building a WordPress MCP integration: workflow-shaped tools, scoped authorization, selective tool loading, audit trails and safe write operations."
author:
  name: "Throughout Engineering Team"
  role: "Software engineering"
  type: "Organization"
  url: "https://www.throughout.io"
publishedDate: "2026-08-14"
updatedDate: "2026-10-07"
seoTitle: "Building a WordPress MCP Server: Engineering Lessons"
metaDescription: "Engineering lessons from building a WordPress MCP server, including tool design, OAuth, permissions, audit logs and safe production writes."
primaryKeyword: "WordPress MCP server"
secondaryKeywords:
  - "Model Context Protocol WordPress"
  - "MCP tool design"
  - "WordPress AI integration"
searchIntent: "Technical informational"
category: "Engineering"
cluster: "AI engineering"
canonicalUrl: "https://www.throughout.io/insights/building-an-mcp-server-for-wordpress-what-we-learned-shipping-easy-mcp-ai"
noIndex: false
coverImage: "/images/insights/mcp-wordpress.png"
coverImageAlt: "Editorial diagram showing an AI client connecting through a controlled MCP gateway to WordPress tools"
relatedArticles:
  - "seo-and-geo-are-merging-here-s-how-we-re-doing-it-differently-with-easy-mcp-ai"
  - "graphql-with-next-js-wordpress-my-practical-guide"
cta:
  label: "Discuss an AI integration"
  description: "Need to connect an AI workflow to a real product safely? Talk through the architecture, permissions and implementation with our engineering team."
  url: "https://www.throughout.io/#contact"
---

The Model Context Protocol (MCP) gives an AI client a standard way to discover and call external tools. For WordPress, that can mean more than reading a post: an authorized assistant could inspect content, retrieve site data, prepare an update or carry out a permitted administrative action.

That is also where the engineering becomes serious. A useful WordPress MCP server sits in front of a large, extensible system containing users, plugins, content, media and sometimes commerce data. The difficult work is not exposing another endpoint. It is making every tool understandable, permissioned and accountable.

These are the lessons that mattered most while we built and tested that integration.

## Design tools around tasks, not REST endpoints

The fastest implementation is to turn each API endpoint into one MCP tool. It is rarely the best interface for an agent.

An endpoint reflects how a backend is organized. A tool should reflect what a person is trying to accomplish. If retrieving one complete post requires separate calls for the post, metadata and taxonomies, the AI must know how those resources relate and assemble them correctly. A workflow-shaped tool can return the coherent object in one controlled operation.

We found it more useful to ask:

- What decision will the caller make with this result?
- What is the smallest complete response needed for that decision?
- Which validation belongs inside the tool rather than in the prompt?
- Is the operation read-only, reversible or destructive?
- What information should never be returned by default?

This produces a smaller cognitive surface even when the underlying WordPress surface is large.

## Tool count is an information-retrieval problem

WordPress installations differ. Plugins can add custom post types, commerce operations, SEO fields and entirely new workflows. A server that tries to cover everything may expose far more tools than an AI client should load into one conversation.

The answer is not necessarily to delete useful capabilities. It is to make discovery selective.

Group tools by domain, such as posts, media, users, commerce and analytics. Give every tool a precise description and input schema. Let clients load only the group relevant to the current task. When a WordPress extension declares its own capabilities, translate only the applicable ones into the active tool set.

This matters because tool descriptions consume context. Similar names or vague descriptions make selection unreliable. A tool called `update` is dangerous; `update_post_excerpt` communicates far more about its scope.

## Authorization must follow the WordPress user

An MCP connection should not become a route around WordPress permissions.

The protocol’s authorization guidance uses OAuth-based discovery and protected-resource metadata. In practice, the server must still map the authenticated identity onto WordPress capabilities and check authorization for every operation. A token saying “write” should not let a subscriber perform an administrator action.

Our design principles were:

1. Authenticate the client through a documented authorization flow.
2. Associate access with a WordPress user or explicitly scoped service identity.
3. Apply short-lived credentials and rotation where the client supports them.
4. Store only hashed or otherwise protected token material.
5. Check the underlying WordPress capability at execution time.
6. Return the minimum data required by the tool.

Manual tokens may still be appropriate for controlled automation, but they need expiry, revocation, scope and an identifiable owner.

## Separate reading, preparing and applying

Reading a page and publishing a rewritten version should not have the same risk profile.

For production systems, a safer workflow separates three steps:

- **Read:** retrieve the current state and the evidence needed for a decision.
- **Prepare:** create a proposed change, explanation and preview without affecting the live site.
- **Apply:** execute the approved change after permissions and preconditions are checked again.

This makes human approval meaningful. It also reduces race conditions: before applying a change, compare the current content version with the version used to create the proposal. If it changed in the meantime, stop rather than overwriting newer work.

## Every write needs an audit trail

“What changed?” is not enough. A useful audit record should answer:

- Which identity initiated the action?
- Which client and tool were used?
- What object was affected?
- What were the validated arguments?
- What existed before the change?
- What existed afterwards?
- When did it happen?
- Did the operation succeed, fail or partially complete?

Avoid logging raw secrets or unnecessary personal data. For sensitive inputs, store a safe summary or hash instead.

An audit trail is useful even when nobody acts maliciously. AI systems and people can both misunderstand instructions. A before-and-after record makes review and recovery possible.

## Treat tool output as untrusted input

MCP connects systems that may contain user-generated content, remote HTML or third-party data. That content can contain instructions intended to manipulate an AI client.

The server should return data as data, not as trusted instructions. Label provenance, constrain output shapes, sanitize where appropriate and avoid combining untrusted content with privileged operational directions. The client must also keep authorization decisions outside model-generated text.

Security cannot be delegated to a prompt saying “ignore malicious instructions.”

## Build for idempotency and partial failure

Network calls fail. Clients retry. WordPress hooks can trigger other systems.

Write tools should be safe to call twice where possible. Use idempotency keys for actions such as creating records, and return stable identifiers. For multi-step operations, report which steps completed rather than returning a generic error after a partial write.

A tool that uploads media, creates a post and attaches the image needs a recovery path if the final step fails. Otherwise retries may create duplicate media and posts.

## Validate the server as a product, not a demo

Our test plan grew beyond “does the tool return a result?” It included:

- Permission tests for multiple WordPress roles
- Expired and revoked credentials
- Invalid and oversized inputs
- Conflicting edits
- Repeated requests
- Plugin-disabled and dependency-missing states
- Unexpected HTML and prompt-like content in tool output
- Audit-log completeness
- Recovery after partial failure

The Model Context Protocol makes interoperability easier. It does not remove the need for conventional API, application-security and operations discipline.

## What we would do again

We would still design from real workflows, keep WordPress capabilities authoritative, separate proposals from writes, and treat observability as part of the feature rather than a debugging extra.

The broader lesson is simple: connecting an AI client to production does not make existing engineering principles obsolete. It makes clear permissions, constrained interfaces and recoverability more important.

## Sources

- [Model Context Protocol documentation](https://modelcontextprotocol.io/docs/getting-started/intro)
- [MCP authorization specification](https://modelcontextprotocol.io/specification/latest/basic/authorization)
- [WordPress Roles and Capabilities](https://wordpress.org/documentation/article/roles-and-capabilities/)
- [WordPress Abilities API](https://developer.wordpress.org/apis/abilities-api/)

