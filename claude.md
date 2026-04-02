\# SonarQube Agentic Workflow - Usage Directive (MUST FOLLOW)



\*\*Always use the Guide-and-Verify workflow\*\* for code generation and modification.



\## GUIDE Phase - Before Generating Code



\*\*Before generating or editing code\*\* you MUST:

1\. Call `get\_guidelines` for project context and coding standards

2\. Locate existing code with `search\_by\_signature\_patterns` or `search\_by\_body\_patterns`

3\. Read implementation with `get\_source\_code`



\*\*When changing architecture or dependencies\*\* you MUST:

\- Check `get\_current\_architecture` and `get\_intended\_architecture`

\- Analyze impact using:

  - `get\_upstream\_call\_flow` / `get\_downstream\_call\_flow` - trace method calls

  - `get\_references` - find all usages

  - `get\_type\_hierarchy` - check inheritance



\## VERIFY Phase - After Generating Code



You must strictly follow this Analyze-Then-Commit workflow for every code modification. No code is considered complete until it has passed the following SonarQube validation loop:



1\. \*\*Read Phase:\*\* After any modification or before commit, use the `Read` tool to load the current state of all relevant source files.

2\. \*\*Analysis Phase:\*\* For every new or modified file, you must call `run\_advanced\_code\_analysis` using:

   - `filePath`: The project-relative path to the file (e.g., `src/main/java/MyClass.java`)

   - `branchName`: The active development branch

   - `fileScope`: `\["MAIN"]` or `\["TEST"]` depending on the code type

3\. \*\*Evaluation \& Remediation:\*\*

&#x20;  - \*\*Rule Lookup:\*\* For every issue flagged, call `show\_rule` with the specific rule key (e.g., `java:S1874`)

   - \*\*Mandatory Fixes:\*\* You are prohibited from committing code with \*\*CRITICAL\*\* or \*\*HIGH\*\* issues. Implement fixes based on the rule's rationale and recommended guidance immediately.

4\. \*\*Verification:\*\* After applying fixes, re-run the analysis to ensure issues are resolved and no regressions were introduced.

