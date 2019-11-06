import React, { Component } from 'react'

class Pagination extends Component {
    render() {
        return (
            <>
                <div class="flex">
                    <ul className="pagination">
                        <li className="pagination_item">1</li>
                        <li className="pagination_item">2</li>
                        <li className="pagination_item">3</li>
                        <li className="pagination_item">4</li>
                        <li className="pagination_item">5</li>
                        <div class="bar"></div>
                    </ul>
                </div>
            </>
        )
    }
}

export default Pagination;