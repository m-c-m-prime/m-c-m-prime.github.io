document.addEventListener("DOMContentLoaded", function () {
  const gameText = document.getElementById("game-text");
  const gameInput = document.getElementById("game-input");

  const gameData = {
    // Starting point
    consultant: {
      text: "You are a consultant in the KYC division of one of the largest investment banks in the world. While reviewing client files, you notice subtle irregularities—shadow transactions, coded accounts, and cryptic financial data. Do you:\n\n1. Investigate further privately\n2. Report your findings to your supervisor\n3. Ignore the red flags to protect your career",
      choices: {
        "1": "investigatePrivately",
        "2": "reportSupervisor",
        "3": "ignore"
      }
    },
    // Branch: Investigate Privately
    investigatePrivately: {
      text: "Digging deeper, you uncover hidden accounts and suspicious transactions that hint at malfeasant accounting—possibly funding terrorism and money laundering. Do you:\n\n1. Hire a hacker to extract more evidence\n2. Contact an underground investigative group\n3. Secretly document everything for later analysis",
      choices: {
        "1": "hireHacker",
        "2": "contactUnderground",
        "3": "documentSecretly"
      }
    },
    // Branch: Report to Supervisor
    reportSupervisor: {
      text: "You report your suspicions to your supervisor. Instead of reassurance, you receive a curt dismissal—but soon encrypted emails begin arriving, hinting that someone is watching you. Do you:\n\n1. Investigate the encrypted emails\n2. Confront your supervisor again\n3. Pretend nothing happened and carry on",
      choices: {
        "1": "investigateEmails",
        "2": "confrontSupervisor",
        "3": "ignoreEmails"
      }
    },
    // Branch: Ignore the Red Flags
    ignore: {
      text: "You decide to ignore the anomalies to protect your career. But guilt and haunting whispers begin to erode your resolve. Late one night, an anonymous message urges you to reconsider. Do you:\n\n1. Reopen the investigation\n2. Confide in a trusted friend\n3. Disconnect completely from work",
      choices: {
        "1": "reopenInvestigation",
        "2": "seekFriendHelp",
        "3": "disconnect"
      }
    },
    // Sub-branch of Investigate Privately
    hireHacker: {
      text: "You hire a skilled hacker. They unearth massive files implicating top executives and mysterious shell companies. But the digital trail soon points back to you. Do you:\n\n1. Escape and go underground\n2. Try to cover your tracks\n3. Send the evidence anonymously to the media",
      choices: {
        "1": "escapeFugitive",
        "2": "coverTracks",
        "3": "sendToMedia"
      }
    },
    contactUnderground: {
      text: "You contact an underground investigative group. They reveal a global web of illicit financing and shadow operatives. Realizing you’re in too deep, you must choose:\n\n1. Refuse to continue and risk exposure\n2. Dig even deeper for the truth\n3. Broker a secret deal with the operatives",
      choices: {
        "1": "refuseContinue",
        "2": "digDeeper",
        "3": "brokerDeal"
      }
    },
    documentSecretly: {
      text: "You meticulously document everything. However, as you compile the data, it distorts into an indecipherable, chaotic web—a digital labyrinth of abstract numbers and paradoxes. Do you:\n\n1. Attempt to decode the chaos\n2. Archive the files and wait\n3. Destroy the files in a moment of panic",
      choices: {
        "1": "decodeChaos",
        "2": "archiveFiles",
        "3": "destroyFiles"
      }
    },
    // Sub-branch of Report to Supervisor
    investigateEmails: {
      text: "You follow the trail of encrypted emails, which lead you to a clandestine digital enclave managed by a mysterious AI. Do you:\n\n1. Engage the AI in conversation\n2. Attempt to hack the enclave\n3. Forward the emails to cybersecurity experts",
      choices: {
        "1": "engageAI",
        "2": "hackEnclave",
        "3": "forwardEmails"
      }
    },
    confrontSupervisor: {
      text: "You confront your supervisor again, only to discover their complicity in the cover-up. They warn you that your career and freedom are at stake. Do you:\n\n1. Challenge them boldly\n2. Pretend to comply while planning a counter-move\n3. Secretly gather more evidence on them",
      choices: {
        "1": "challengeBoldly",
        "2": "complyPlan",
        "3": "gatherEvidence"
      }
    },
    ignoreEmails: {
      text: "You choose to ignore the eerie emails, but soon the threats become more tangible—anonymous warnings and inexplicable incidents begin to occur. Do you:\n\n1. Investigate the threats\n2. Report the incidents anonymously\n3. Withdraw from your duties",
      choices: {
        "1": "investigateThreats",
        "2": "reportIncidents",
        "3": "withdrawDuties"
      }
    },
    // Sub-branch of Ignore
    reopenInvestigation: {
      text: "Haunted by guilt, you reopen the investigation. The deeper you go, the more the boundaries of time and logic distort into a surreal maze. Do you:\n\n1. Proceed cautiously\n2. Go all in despite the risks\n3. Try to stop and forget everything",
      choices: {
        "1": "proceedCautiously",
        "2": "goAllIn",
        "3": "stopEverything"
      }
    },
    seekFriendHelp: {
      text: "You confide in a trusted friend—an ex-intelligence officer. Together you cross-check data, but the shared burden of forbidden knowledge soon becomes overwhelming. Do you:\n\n1. Continue together\n2. Split up to cross-check further\n3. Abandon the investigation to save your sanity",
      choices: {
        "1": "togetherContinue",
        "2": "separatePaths",
        "3": "dropInvestigation"
      }
    },
    disconnect: {
      text: "You disconnect entirely from work. Yet, the digital specters of the case invade your dreams with abstract symbols and cosmic chaos. Do you:\n\n1. Seek psychological help\n2. Document your surreal dreams\n3. Embrace the chaos to understand it",
      choices: {
        "1": "seekHelp",
        "2": "documentDreams",
        "3": "embraceChaos"
      }
    },
    // Ending nodes for Investigate Privately branch
    escapeFugitive: {
      text: "You escape underground, living as a fugitive. But the digital trail haunts you relentlessly, and eventually, the system catches up. END: Captured by the machinery of finance.",
      choices: {}
    },
    coverTracks: {
      text: "Your attempt to cover your tracks fails as the evidence becomes a swirling vortex of data, drawing you into corporate oblivion. END: Consumed by abstract chaos.",
      choices: {}
    },
    sendToMedia: {
      text: "You send the evidence anonymously to the media. The revelation shatters public trust, yet the narrative twists into cosmic absurdity, and you vanish into the digital void. END: Lost in the chaos.",
      choices: {}
    },
    // Ending nodes for Contact Underground branch
    refuseContinue: {
      text: "Your refusal to continue triggers a ruthless clampdown by unseen forces. The labyrinth of corruption traps you in endless bureaucracy. END: Ensnared by the machine.",
      choices: {}
    },
    digDeeper: {
      text: "Digging deeper, you unearth layers of deception that obliterate your sense of self. The truth dissolves you into an infinite spiral. END: Dissolved into abstraction.",
      choices: {}
    },
    brokerDeal: {
      text: "You attempt to broker a secret deal with shadow operatives, but their cryptic terms consume your identity. END: Reduced to abstract data.",
      choices: {}
    },
    // Ending nodes for Document Secretly branch
    decodeChaos: {
      text: "Your mind fractures while decoding the chaotic files, and the digital labyrinth overwhelms your senses. END: Imploded into chaos.",
      choices: {}
    },
    archiveFiles: {
      text: "You archive the files, but as time loops, the evidence dissolves into endless recursion. END: Trapped in the cycle.",
      choices: {}
    },
    destroyFiles: {
      text: "In a panic, you destroy the files—but the void left behind engulfs you in paradox. END: Obliterated by the void.",
      choices: {}
    },
    // Ending nodes for Investigate Emails branch
    engageAI: {
      text: "Engaging the enigmatic AI, you are drawn into its cryptic logic and lose yourself in a cascade of digital dreams. END: Merged with the algorithm.",
      choices: {}
    },
    hackEnclave: {
      text: "Your hack backfires as the enclave collapses into a vortex of entropy that swallows you whole. END: Consumed by digital entropy.",
      choices: {}
    },
    forwardEmails: {
      text: "Forwarding the emails sparks a massive data breach that isolates you in a realm of chaotic information. END: Exiled into the cyber void.",
      choices: {}
    },
    // Ending nodes for Confront Supervisor branch
    challengeBoldly: {
      text: "Your bold challenge shakes the corporate foundation, but the backlash is overwhelming. END: Crushed by the system.",
      choices: {}
    },
    complyPlan: {
      text: "Feigning compliance while secretly plotting only tightens the system’s grip. END: Subsumed by the corporate machine.",
      choices: {}
    },
    gatherEvidence: {
      text: "As you gather more evidence, you become entangled in the web you sought to expose. END: Lost in the labyrinth.",
      choices: {}
    },
    // Ending nodes for Ignore Emails branch
    investigateThreats: {
      text: "Investigating the escalating threats reveals a conspiracy that shatters your reality. END: Mind broken by the revelation.",
      choices: {}
    },
    reportIncidents: {
      text: "Your anonymous reports vanish into nothingness as the system feeds on silence. END: Silenced by the void.",
      choices: {}
    },
    withdrawDuties: {
      text: "Withdrawing from your responsibilities only draws more scrutiny. The digital tendrils follow you relentlessly. END: Perpetually pursued.",
      choices: {}
    },
    // Ending nodes for Reopen Investigation branch
    proceedCautiously: {
      text: "You proceed with caution, yet every step reveals deeper layers of abstract corruption. END: Entrapped in the infinite.",
      choices: {}
    },
    goAllIn: {
      text: "Throwing caution aside, you plunge into chaos. The ensuing cascade shatters reality. END: Annihilated by the system.",
      choices: {}
    },
    stopEverything: {
      text: "Attempting to halt the investigation only accelerates the collapse of logic into endless recursion. END: Lost in the loop.",
      choices: {}
    },
    // Ending nodes for Seek Friend Help branch
    togetherContinue: {
      text: "You and your friend press on together, but the burden of forbidden knowledge fractures your bond. END: Separated by existential dread.",
      choices: {}
    },
    separatePaths: {
      text: "Splitting up leads to conflicting discoveries that implode into paradox. END: Fragmented into oblivion.",
      choices: {}
    },
    dropInvestigation: {
      text: "Abandoning the case does little to free you; the darkness clings, haunting you forever. END: Haunted by unresolved echoes.",
      choices: {}
    },
    // Ending nodes for Disconnect branch
    seekHelp: {
      text: "Seeking help only reveals that your mind is already interwoven with the system’s code. END: Lost in the neural network.",
      choices: {}
    },
    documentDreams: {
      text: "Your attempts to document surreal dreams create a record of cosmic entropy. END: Immersed in abstract time.",
      choices: {}
    },
    embraceChaos: {
      text: "In embracing the chaos, you dissolve into the cosmic dance of data and entropy. END: Transcended into galactic randomness.",
      choices: {}
    }
  };

  let currentNode = "consultant";

  function updateGame() {
    gameText.innerHTML += `<br><br><strong>${gameData[currentNode].text}</strong>`;
    gameText.scrollTop = gameText.scrollHeight;
  }

  gameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let input = gameInput.value.trim();
      gameInput.value = "";
      if (gameData[currentNode].choices[input]) {
        currentNode = gameData[currentNode].choices[input];
        updateGame();
      } else {
        gameText.innerHTML += "<br><br>Invalid choice. Try again.";
      }
    }
  });

  console.log("Game script loaded successfully");
  updateGame();
});
