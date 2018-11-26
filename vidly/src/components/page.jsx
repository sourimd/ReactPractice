import React, { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getClass(page) {
    if (page === this.props.currentPage) {
      return "page-item active";
    } else {
      return "page-item";
    }
  }
  render() {
    const pagesCount = parseInt(
      Math.ceil(this.props.itemsCount / this.props.pageSize)
    );
    if (pagesCount === 1) return null;
    const pageArr = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageArr.push(i);
    }
    return (
      <React.Fragment>
        <nav>
          <ul className="pagination">
            {pageArr.map(page => (
              <li key={page} className={this.getClass(page)}>
                <a
                  className="page-link"
                  onClick={() => this.props.onPageChange(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Page;
