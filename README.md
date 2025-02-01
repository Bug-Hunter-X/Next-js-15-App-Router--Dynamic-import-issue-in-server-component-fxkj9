# Next.js 15 App Router: Dynamic Import Issue in Server Component

This repository demonstrates a bug encountered when using dynamic imports within server components in Next.js 15's App Router.  The issue involves unexpected behavior or errors during the import process.  The solution below addresses this specific problem.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the behavior (error or unexpected output) in the browser.

## Bug Description

The bug involves how dynamic imports are handled in server components within Next.js 15's App Router. The current implementation fails to resolve dynamically imported modules correctly in certain scenarios, resulting in unexpected behavior or runtime errors.  More specific details regarding the error message or unexpected outcome can be added here, depending on the nature of the problem.

## Solution

The proposed solution uses a different method of importing modules or addresses issues in the configuration that was causing the dynamic import to fail.  Detailed explanation of the solution's approach is provided in the comments within `bugSolution.js`