'use strict';

const offers = {
    1: {
        id: 1,
        discountPercent: 30,
        offerDetails: {
            mainDetail: {
                offerName: "Buy 1 Get 2",
                offerPrice: 18,
                ogPrice: 18 / (1 - 30 / 100),
            },
            // rest of options are kept static for now
        },
        isPopular: false,
        isSelected: false,
    },
    2: {
        id: 2,
        discountPercent: 30,
        offerDetails: {
            mainDetail: {
                offerName: "Buy 2 Get 4",
                offerPrice: 24,
                ogPrice: 24 / (1 - 30 / 100),
            },
            // rest of options are kept static for now
        },
        isPopular: true,
        isSelected: false,
    },
    3: {
        id: 3,
        discountPercent: 10,
        offerDetails: {
            mainDetail: {
                offerName: "Buy 3 Get 6",
                offerPrice: 36,
                ogPrice: 36 / (1 - 10 / 100),
            },
            // rest of options are kept static for now
        },
        isPopular: false,
        isSelected: true
    }
}

const handleOfferSelection = (offer) => {
    const totalPrice = document.querySelector(".total-price");
    totalPrice.innerHTML = `Total : $${offers[offer.value].offerDetails.mainDetail.offerPrice.toFixed(2)} USD`
}

const createHtml = (offer, idx) => {
    if (offer.isSelected) {
        handleOfferSelection({value: offer.id})
    }
    return `<label for="offer-${idx + 1}" class="offer closed" id="offer-${idx + 1}-container">
                <div class="discount">
                    <p class="discount-value">${offer.discountPercent}%</p>
                    <p class="discount-text">Off</p>
                </div>
                <img class="dashed-line" src="./assets/divider.svg"></img>
                <div class="offer-details">
                    <div class="main-detail">
                        <input type="radio" name="offer" value="${offer.id}" id="offer-${idx + 1}" onclick="handleOfferSelection(this);" ${offer.isSelected ? "checked" : ""}/>
                        <span class="radio-button">
                            <img src="./assets/radio-outer-circle.svg" />
                            <img src="./assets/radio-inner-circle.svg" />
                        </span>
                        <div class="content">
                            <p>${offer.offerDetails.mainDetail.offerName} <span class="small-percent-label">${offer.discountPercent}% Off</span></p>
                            <div class="offer-price"><strong>$${offer.offerDetails.mainDetail.offerPrice.toFixed(2)} USD</strong>&nbsp;<span class="og-price">$${offer.offerDetails.mainDetail.ogPrice.toFixed(2)} USD</span>
                            </div>
                        </div>
                    </div>

                    <div class="custom-options">
                        <div class="option-heading">
                            <span>Size</span>
                            <span>Colour</span>
                        </div>
                        <div class="option">
                            <span class="sr-no">#1</span>
                            <span class="dropdown">
                                <select>
                                    <option value="S" selected>S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span class="dropdown">
                                <select>
                                    <option value="colour" disabled>Colour</option>
                                    <option value="black" selected>Black</option>
                                    <option value="red">Red</option>
                                </select>
                            </span>
                        </div>
                        <div class="option">
                            <span class="sr-no">#2</span>
                            <span class="dropdown">
                                <select>
                                    <option value="S" selected>S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span class="dropdown">
                                <select>
                                    <option value="colour" selected disabled>Colour</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                </select>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="most-popular">
                    ${offer.isPopular ? `<p>Most Popular</p>` : ``}
                </div>
            </label>`
}

document.addEventListener('DOMContentLoaded', () => {
    const offersElement = document.querySelector('#offers');
    offersElement.innerHTML = Object.values(offers).map((offer, idx) => createHtml(offer, idx)).join("");
})