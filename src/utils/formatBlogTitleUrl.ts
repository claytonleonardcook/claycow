function formatBlogTitleUrl(title: string): string {
    return title.toLowerCase().replaceAll(" ", "-");
}

export default formatBlogTitleUrl;