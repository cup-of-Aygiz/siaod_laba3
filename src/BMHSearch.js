export function BMHSearch(source, template) {
    let index;
    let templateMask = [],
        i = 0, j, c;
    while (i < template.length - 1) {
        templateMask[template.charAt(i)] = template.length - 1 - i;
        i++
    }
    i = 0;
    while (i < source.length) {
        for (j = template.length - 1; j >= 0; j--)
            if (template[j] !== source[i + j]) {
                break;
            }
        if (j < 0) {
            i++;
            index = i;
        } else {
            c = templateMask[source.charAt(i + j)];
            if (!c)
                c = template.length - 1 + 1;
            c += j - template.length - 1;
            if (c <= 0)
                c = 1;
            i += c;
        }
    }
    return index - 1;
}