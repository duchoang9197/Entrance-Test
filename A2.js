const footballClubs = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    }
];
const rankings = (club1, club2) => {
    const club1Points = club1.points
    const club2Points = club2.points
    const club1Gd = club1.GD
    const club2Gd = club2.GD
  
    let comparison = 0;
    if (club1Points > club2Points) {
      comparison = 1;
    } else if (club1Points < club2Points) {
      comparison = -1;
    } else if (club1Points == club2Points) {
      if (club1Gd > club2Gd) {
        comparison = 1;
      } else if (club1Gd < club2Gd) {
        comparison = -1;
      }
    }
    return comparison * -1;
  };
  
  const rank = (clubs) => {
    clubs.sort(rankings);
    for (club of clubs) {
        club.position = clubs.indexOf(club) + 1;
    }
    return clubs;
  };

  console.log(rank(footballClubs));
