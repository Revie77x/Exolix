import { Lexer } from "@skylixgh/elixor-lexer";

interface Tokens {
    newLine: RegExp;
    if: RegExp;
    true: RegExp;
    false: RegExp;
    lParen: RegExp;
    rParen: RegExp;
    lBrace: RegExp;
    rBrace: RegExp;
    text: RegExp;
    space: RegExp;
    quote: RegExp;
    semiColon: RegExp;
}

interface Node {
    nodes: Node[];
    type: keyof Tokens;
    value?: string;
}

class LanguageCompiler {
    readonly lexer: Lexer<Tokens>;

    public constructor(source: string) {
        const tokens: Tokens = {
            newLine: /^\n/,
            if: /^if\b/,
            true: /^true\b/,
            false: /^false\b/,
            lParen: /^\(/,
            rParen: /^\)/,
            lBrace: /^\{/,
            rBrace: /^\}/,
            space: /^\s+/,
            quote: /^"/,
            semiColon: /^;/,
            text: /^[^\(\)\n]+/,
        };

        this.lexer = new Lexer(tokens, source);
        this.#parse();
    }

    #parse() {
        const tokens = this.lexer.tokens;
        const ast: Node[] = [];

        tokens.forEach((token, index) => {
            if (token.type === "if") {
                ast.push({
                    type: "if",
                    value: tokens[index + 3].value,
                    nodes: []
                });
            }
        });

        console.log(ast);
    }
}

const clr = new LanguageCompiler(`print("Hello World");
if (true) {
    print("Hello World True");
}`);