/*

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

*/

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  pages() {
    const pages = [];
    for (let i = 0; i <= this.pageCount(); i++) {
      const [prev, next] = [i * this.itemsPerPage, (i + 1) * this.itemsPerPage];
      pages[i] = [...this.collection.slice(prev, next)];
    }
    return pages;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    const page = this.pages()[pageIndex] || [];
    const ct = pageIndex <= this.pages().length ? page.length : -1;
    return ct || -1;
  }
  pageIndex(itemIndex) {
    if (!this.pageCount() || itemIndex >= this.itemCount()) return -1;
    const idx = Math.floor(itemIndex / this.itemsPerPage);
    return idx < this.pageCount() && idx >= 0 ? idx : -1;
  }
}
