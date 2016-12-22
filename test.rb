test.rb
appendAllHotelInfo = function(data){
  for(i=0;i<10;i++){
    resultDiv = $('<div></div>')
    results = $('<ul></ul>');
    itemName = $('<li></li>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemAddress4 = $('<li></li>');
    itemAddress5 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemContact = $('<li></li>');
    name = data.results[i].property_name
    addressLine1 = data.results[i].address.line1
    addressLine2 = data.results[i].address.city
    addressLine3 = data.results[i].address.region
    addressLine4 = data.results[i].address.postal_code
    addressLine5 = data.results[i].address.country
    itemPricee = data.results[i].min_daily_rate.amount
    itemContactt = data.results[i].contacts[0].detail
    nameparams = name.replace(/ /g, '')
    addressLine1Params = addressLine1.replace(/ /g, '')
    addressLine2Params = addressLine2.replace(/ /g, '')
    addressLine3Params = addressLine3.replace(/ /g, '')
    addressLine3Params = addressLine3.replace(/','/g, '')
    addressLine4Params = addressLine4.replace(/ /g, '')
    addressLine5Params = addressLine5.replace(/ /g, '')
    itemPriceParams = itemPricee.replace(/ /g, '%20')
    itemPriceParams = itemPricee.replace('.', 'P')
    itemContactParams = itemContactt.replace(/ /g, '%20')
    urlID = nameparams + '%20'+ addressLine1Params + addressLine2Params +addressLine3Params  + addressLine4Params + addressLine5Params + '%20' + itemPriceParams + '%20' +itemContactParams
    namelist = $('<a href=/hotels/'+urlID+'>'+name+'</a>');
    itemName.append(namelist)
    itemAddress1.text(addressLine1)
    itemAddress2.text(addressLine2)
    itemAddress3.text(addressLine3)
    itemAddress4.text(addressLine4)
    itemAddress5.text(addressLine5)
    itemPrice.text(itemPricee)
    itemContact.text(itemContactt)
    results.append(itemName);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    results.append(itemAddress4);
    results.append(itemAddress5);
    results.append(itemPrice);
    results.append(itemContact);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }
}
Add Comment
