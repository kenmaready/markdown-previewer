import marked from 'marked';

let render_open_new_tab = function () {
    
    let render = new marked.Renderer();

    render.link = function (href, title, text) {
        return `<a href=${href} target="_blank">${text}</a>`
    };

    return render;
}

marked.setOptions({
    breaks: true,
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    renderer: render_open_new_tab(),
    sanitize: true,
    smartLists: true
});

const UPDATE_INPUT = 'UPDATE_INPUT';
const INITIAL_TEXT = `This markdown previewer is powered by [marked.js](https://marked.js.org/).

# This is a Header

## This is a Secondary Header

Inline code can be written like this: \`import marked from 'marked';\`

Code blocks can be written like this:
\`\`\`
//function to return 2x
const doubler = (num) => {
    return num * 2;
};
\`\`\`

You can make lists, both:
1. Ordered, and
* Unordered

As **Isaac Bashevis Singer** said:

> "Our knowledge is a little island in
> a great ocean of nonknowledge."

![Image of small island](https://khms1.googleapis.com/kh?v=845&hl=en-US&x=32513&y=18036&z=15)
`;
const INITIAL_STATE = {text: INITIAL_TEXT, markdown: marked(INITIAL_TEXT)}

const newInputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return { text: action.payload.text, markdown: marked(action.payload.text) };
        default:
            return state;
    };
};

export default newInputReducer;
