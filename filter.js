document.getElementById("filter-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const priceMin = document.getElementById("price-min").value;
    const priceMax = document.getElementById("price-max").value;
    const rooms = document.getElementById("rooms").value;
    const region = document.getElementById("region").value;
    const type = document.getElementById("type").value;
    
    const properties = document.querySelectorAll(".property-item");
    
    properties.forEach(function (property) {
        let showProperty = true;
        
        const propertyPrice = parseInt(property.getAttribute("data-price"));
        const propertyRooms = property.getAttribute("data-rooms");
        const propertyRegion = property.getAttribute("data-region");
        const propertyType = property.getAttribute("data-type");
        
        if (priceMin && propertyPrice < priceMin) showProperty = false;
        if (priceMax && propertyPrice > priceMax) showProperty = false;
        if (rooms && rooms !== propertyRooms && !(rooms === "3+" && propertyRooms >= 3)) showProperty = false;
        if (region && region !== propertyRegion) showProperty = false;
        if (type && type !== propertyType) showProperty = false;
        
        if (showProperty) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
});
