import {
  isExtNani,
  trimAuthor,
  trimBracket,
  trimBrTag,
  trimFgTag,
  trimSquareBrackets,
  trimRuby,
} from "../src/naninovel";

describe("trimAuthor test", () => {
  test("セリフの場合は話者IDを除外して返す", async () => {
    const lineContent = "レイチェル: んー……それはそうなんだけどさ。";
    const res = trimAuthor(lineContent);
    expect(res).toBe("んー……それはそうなんだけどさ。");
  });

  test("セリフでない文章の場合はそのまま返す", async () => {
    const lineContent = "んー……それはそうなんだけどさ。";
    const res = trimAuthor(lineContent);
    expect(res).toBe("んー……それはそうなんだけどさ。");
  });
});

describe("isExtNani test", () => {
  test(".naniのファイルパスが渡された", async () => {
    const filePath = "hoge/huga.nani";
    const res = isExtNani(filePath);
    expect(res).toBe(true);
  });

  test(".txtのファイルパスが渡された", async () => {
    const filePath = "hoge/huga.txt";
    const res = isExtNani(filePath);
    expect(res).toBe(false);
  });

  test("ディレクトリパスが渡された", async () => {
    const filePath = "hoge/huga";
    const res = isExtNani(filePath);
    expect(res).toBe(false);
  });
});

describe("trimBracket test", () => {
  test("<br>をトリミングする", async () => {
    const res = trimBracket("<br>");
    expect(res).toBe("");
  });
});

describe("trimBrTag test", () => {
  test("<br>をトリミングする", async () => {
    const res = trimBrTag("<br>");
    expect(res).toBe("");
  });

  test("他のタグは残す", async () => {
    const res = trimBrTag("テキスト<span>重要</span><br>続き");
    expect(res).toBe("テキスト<span>重要</span>続き");
  });
});

describe("trimFgTag test", () => {
  test('<fg="1011_001">目眩</fg>をトリミングする', async () => {
    const res = trimFgTag('<fg="1011_001">目眩</fg>');
    expect(res).toBe("目眩");
  });

  test('複数のfgタグをトリミングする', async () => {
    const res = trimFgTag('テキスト<fg="color1">重要</fg>な<fg="color2">部分</fg>です');
    expect(res).toBe("テキスト重要な部分です");
  });

  test('fgタグが含まれていない場合はそのまま返す', async () => {
    const res = trimFgTag('普通のテキストです');
    expect(res).toBe("普通のテキストです");
  });
});

describe("trimSquareBrackets test", () => {
  test("[br]をトリミングする", async () => {
    const res = trimSquareBrackets("[br]");
    expect(res).toBe("");
  });
});

describe("trimRuby test", () => {
  test("rubyタグをトリミングする", async () => {
    const res = trimRuby('<ruby="・">彼</ruby><ruby="・">女</ruby>');
    expect(res).toBe("彼・女・");
  });
});
