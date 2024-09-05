PLANERING

KRAV1

Implementera Clerk där du får en jsonwebtoken, skapa två olika modeller en för användare och en för moderatorer

Krav 2

Om användaren är skaparen, eller moderator tillåt låsning av tråd. Gör detta genom att skapa en ny prop i type Thread (ex locked?: boolean) sen en function där man gör en checkbox, men ändrar boxen till en icon som typ ett litet hänglås så när man klickar på den får man checkbox.checked=true. Skriver en function som är typ if (checkbox.checked) {
(gör en funktion som hämtar threaden baserat på id som sedan pushar en prop till det objektet som blir då locked:true eller locked:false)
}

Krav 3

Skapa useStates som kollar om det finns en matchande jsonwebtoken lagrad i användarens localStorage den kan kallas isLoggedIn, om som sedan kan använda på alla kommenteraknappar eller skapa tråd knappar där man använder if (isLoggedin) { så körs funktionerna som vanligt} else if (!isLoggedIn) { felmeddelande }

Krav 4

Som krav 2 ändra type Comment med en ny prop som vi kallar isAnswer = boolean och så kan ägaren av tråden markera det med en checkbox, genom att använda if(checkbox.checked)

Krav 5
a gör en useEffect som översättarens jsonwebtoken till ett användarID och jämför den med användarID som finns på Thread, och om det matchar så rendera en "edit" button, och göra ett inputfält för vilket av propsen man vill ändra och göra en patch

b Användare ska kunna vara moderatorer vilket redan fixat från början. Ska göra en enkel dashboard som renderas om användaren är moderator. Morderatorer ska kunna i en lista med användare lägga till en prop på User typen som kallas moderator: boolean

c redan fixat i Krav 4, addera bara logiken från krav 5

Krav 6

type Comment {
id: string
user: User
createdAt: Date
content: String
hasInappropriateLanguage: boolean
commentNumber?: RespondedComment
}

type RespondedComment {
id: string
chronologicalOrder: number
}

if (hasInappropriateLanguage) {
querryselector.bla bla hur man nu gör så
classList.add("nåt som blurrar texten")
}
