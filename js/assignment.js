document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //setting up variables
    const header1 = document.createElement('h1')
    const header2 = document.createElement('h2')
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')
    const para3 = document.createElement('p')
    const listUnorder = document.createElement('ul')
    const listItem1 = document.createElement('li')
    const listItem2 = document.createElement('li')
    const listItem3 = document.createElement('li')

    // setting up filler text 
    const sampleText1 = "I met a traveller from an antique land, who said -- 'Two vast and trunkless legs of stone stand in the desert..."
    const sampleText2 = "Near them, on the sand, half sunk a shattered visage lies, whose frown, and wrinkled lip, and sneer of cold command, tell that its sculptor well those passions read which yet survive, stamped on these lifeless things, the hand that mocked them, and the heart that fed;"
    const sampleText3 = "And on the pedestal, these words appear: My name is Ozymandias, King of Kings; look on my works, ye Mighty, and despair!"

    //adding text to headers
    header1.innerText = "Ozymandias"
    header2.innerText = "Percy Bysshe Shelley"

    //adding text to paragraphs
    para1.innerHTML = sampleText1
    para2.innerText = sampleText2
    para3.innerText = sampleText3

    //adding text to list items
    listItem1.innerHTML = "Nothing beside remains. Round the decay"
    listItem2.innerHTML = "Of that colossal wreck, boundless and bare"
    listItem3.innerHTML = "The lone and level sands stretch far away.'"

    // adding headers to the body
    const bodyContainer = document.getElementById('container')
    bodyContainer.appendChild(header1)
    bodyContainer.appendChild(header2)
    //adding paragraphs to the body
    bodyContainer.appendChild(para1)
    bodyContainer.appendChild(para2)
    bodyContainer.appendChild(para3)
    //adding list to body
    bodyContainer.appendChild(listUnorder)
    //adding list items to list
    listUnorder.appendChild(listItem1)
    listUnorder.appendChild(listItem2)
    listUnorder.appendChild(listItem3)
});