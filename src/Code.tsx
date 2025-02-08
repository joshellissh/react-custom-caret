import {CodeBlock} from "react-code-block";
import {themes} from "prism-react-renderer";

export function InlineCode(code: string) {
    return <span className="inline-code bg-gray-100">{code}</span>;
}

export function Code(code: string) {
    return (
        <CodeBlock code={code} language="tsx" theme={themes.github}>
            <CodeBlock.Code className="bg-gray-100 p-6 rounded-xl shadow-lg">
                <div className="table-row">
                    <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none"/>
                    <CodeBlock.LineContent className="table-cell">
                        <CodeBlock.Token/>
                    </CodeBlock.LineContent>
                </div>
            </CodeBlock.Code>
        </CodeBlock>
    );
}