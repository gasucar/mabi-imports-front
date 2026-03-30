import { parseAIMessage } from "../../utils/parse_ai_message";

type Props = {
    text: unknown;
};

const AIMessageRenderer = ({ text }: Props) => {
    if (typeof text !== "string") return <>{text}</>;

    const blocks = parseAIMessage(text);

    return (
        <div className="space-y-4">
            {blocks.map((b, i) => {
                // Bloque de texto normal
                if (b.text) {
                    return (
                        <p key={i} className="whitespace-pre-line">
                            {b.text}
                        </p>
                    );
                }

                return (
                    <div key={i} className="space-y-1">
                        <p className="font-medium">
                            {b.emoji}{" "}
                            {b.link ? (
                                <a
                                    href={b.link}
                                    target="_blank"
                                    className="underline hover:opacity-80"
                                >
                                    {b.title}
                                </a>
                            ) : (
                                b.title
                            )}
                        </p>
                        {b.description && (
                            <p className="text-sm opacity-90">{b.description}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AIMessageRenderer;