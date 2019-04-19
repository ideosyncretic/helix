import isImageFile from "./images";

describe("isImageFile", () => {
  describe("when file name has valid image extension", () => {
    it("returns true when file name has '.jpg' extension", () => {
      expect(isImageFile("test.jpg")).toBe(true);
    });
    it("returns true when file name has '.jpeg' extension", () => {
      expect(isImageFile("test.jpeg")).toBe(true);
    });
    it("returns true when file name has '.png' extension", () => {
      expect(isImageFile("test.png")).toBe(true);
    });
    it("returns true when file name has '.gif' extension", () => {
      expect(isImageFile("test.gif")).toBe(true);
    });
  });

  describe("when file name has does not have valid image extension", () => {
    it("returns false when file name has invalid image extension", () => {
      expect(isImageFile("test.potato")).toBe(false);
    });
    it("returns false when file name has no extension", () => {
      expect(isImageFile("test")).toBe(false);
    });
  });
});
