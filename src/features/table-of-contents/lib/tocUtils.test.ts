import { getTableOfContents } from './tocUtils';

describe('getTableOfContents 테스트', () => {
  test('heading이 주어진 경우 배열 형태로 parsing하여 반환한다.', () => {
    const markdown = `
      # Heading 1
      ## Heading 2
      ### Heading 3
      #### Heading 4
      ##### Heading 5
      ###### Heading 6
    `;
    const headings = getTableOfContents(markdown);
    expect(headings).toEqual([
      { tag: 'h1', value: 'Heading 1' },
      { tag: 'h2', value: 'Heading 2' },
      { tag: 'h3', value: 'Heading 3' },
      { tag: 'h4', value: 'Heading 4' },
      { tag: 'h5', value: 'Heading 5' },
      { tag: 'h6', value: 'Heading 6' },
    ]);
  });

  test('코드블럭 내에 있는 # 은 parsing하지 않는다.', () => {
    const markdown = `
      # Heading 1
      ## Heading 2
      \`\`\`
        # annotation
        function something() {...}
      \`\`\`
      ##### Heading 5
      ###### Heading 6
    `;
    const headings = getTableOfContents(markdown);
    expect(headings).toEqual([
      { tag: 'h1', value: 'Heading 1' },
      { tag: 'h2', value: 'Heading 2' },
      { tag: 'h5', value: 'Heading 5' },
      { tag: 'h6', value: 'Heading 6' },
    ]);
  });

  test('#이 7개면 parsing하지 않는다,', () => {
    const markdown = `
      # Heading 1
      ## Heading 2
      ### Heading 3
      #### Heading 4
      ##### Heading 5
      ###### Heading 6
      ####### Heading 7
    `;
    const headings = getTableOfContents(markdown);
    expect(headings).toEqual([
      { tag: 'h1', value: 'Heading 1' },
      { tag: 'h2', value: 'Heading 2' },
      { tag: 'h3', value: 'Heading 3' },
      { tag: 'h4', value: 'Heading 4' },
      { tag: 'h5', value: 'Heading 5' },
      { tag: 'h6', value: 'Heading 6' },
    ]);
  });
});
