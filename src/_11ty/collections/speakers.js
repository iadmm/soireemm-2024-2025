function speakers(collectionApi) {
  return collectionApi
    .getFilteredByGlob("./src/content/speakers/*.md")
    .sort((a, b) =>
      a.data.surname.localeCompare(b.data.surname, { sensitivity: "base" })
    );
}

export { speakers };
