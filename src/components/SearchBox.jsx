import React, { Component } from 'react';
import "../styles/rooms.css"
import "../styles/rooms_responsive.css"

class Search extends Component {
    render() {
        return (
            <>
                <div class="search_box">
                    <div class="containerSearch">
                        <div class="rowSearch">
                            <div class="colSearch">
                                <div class="search_box_container d-flex flex-row align-items-center justify-content-start">
                                    <div class="search_form_container">
                                        <form action="#" id="search_form" class="search_form">
                                            <div class="d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                                <ul class="search_form_list d-flex flex-row align-items-center justify-content-start flex-wrap">
                                                    <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                        <span>Min Price</span>
                                                        <i class="fa fa-chevron-down ml-auto" aria-hidden="true"></i>
                                                        <ul>
                                                            <li>$100</li>
                                                            <li>$110</li>
                                                            <li>$120</li>
                                                            <li>$130</li>
                                                            <li>$140</li>
                                                            <li>$150</li>
                                                        </ul>
                                                    </li>
                                                    <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                        <span>Max price</span>
                                                        <i class="fa fa-chevron-down ml-auto" aria-hidden="true"></i>
                                                        <ul>
                                                            <li>$500</li>
                                                            <li>$600</li>
                                                            <li>$700</li>
                                                            <li>$800</li>
                                                            <li>$900</li>
                                                            <li>$1000</li>
                                                        </ul>
                                                    </li>
                                                    <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                        <span>Guests</span>
                                                        <i class="fa fa-chevron-down ml-auto" aria-hidden="true"></i>
                                                        <ul>
                                                            <li>1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                        </ul>
                                                    </li>
                                                    <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                        <span>Children</span>
                                                        <i class="fa fa-chevron-down ml-auto" aria-hidden="true"></i>
                                                        <ul>
                                                            <li>1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                        </ul>
                                                    </li>
                                                    <li class="search_dropdown d-flex flex-row align-items-center justify-content-start">
                                                        <span>Rooms</span>
                                                        <i class="fa fa-chevron-down ml-auto" aria-hidden="true"></i>
                                                        <ul>
                                                            <li>1</li>
                                                            <li>2</li>
                                                            <li>3</li>
                                                            <li>4</li>
                                                            <li>5</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <button class="search_button">search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;