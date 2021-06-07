export default async function getNewsArticle(page, search) {
    debugger;
    let compiled = Array.from(
    { length: 100 },
    (_, offset) => {
            const article = {
                id: offset,
                thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
                title: `Title ${offset + 1}`,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            };
            return article;
        },
    );
    if (search) {
        compiled = compiled.filter(
        each => each.title.toLowerCase().includes(search.toLowerCase()),
        );
    }
    compiled = compiled.slice(page * 10, (page * 10) + 10);
    return compiled;
}