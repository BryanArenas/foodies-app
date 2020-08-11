# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([
    {
        name: "Chipotle",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png"
    },
    {
        name: "Melao Bakery",
        image_url: "http://www.melaobakery.com/wp-content/uploads/2018/03/melao-logo.png"
    },
    {
        name: "Chili's",
        image_url: "http://logok.org/wp-content/uploads/2014/10/Chilis-logo-old.png"
    },
    {
        name: "Cheddar's",
        image_url: "https://www.nrn.com/sites/nrn.com/files/cheddars-logo.gif"
    },
    {
        name: "Miller's Ale House",
        image_url: "https://cblproperty.blob.core.windows.net/production/assets/blt87587ec9381653c4-millers-ale-house-logo-full-red.png"
    },
    {
        name: "Buffalo Wild Wings",
        image_url: "http://www.oceansidechamber.com/uploads/4/4/5/3/44535401/buffalo-wild-wings-logo.png"
    }

])