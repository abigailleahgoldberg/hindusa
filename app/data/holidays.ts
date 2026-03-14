export interface Holiday {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  significance: string;
  howObserved: string;
  scriptureRef: string;
  scriptureText: string;
  emoji?: string;
  color: string;
}

export const holidays: Holiday[] = [
  {
    slug: "diwali",
    name: "Diwali",
    subtitle: "Festival of Lights",
    color: "#FF9933",
    description:
      "Diwali is the most widely celebrated Hindu festival — five days of lights, sweets, fireworks, and the triumph of knowledge over ignorance, light over darkness, and good over evil.",
    significance:
      "Diwali commemorates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over the demon king Ravana. It also celebrates Goddess Lakshmi, the deity of prosperity and wealth, who is said to visit clean and brightly lit homes. For many Hindus, Diwali marks the spiritual New Year.",
    howObserved:
      "Families clean and decorate their homes with oil lamps (diyas) and colorful rangoli patterns. Prayers are offered to Goddess Lakshmi and Lord Ganesha. Sweets and gifts are exchanged with family and neighbors. Fireworks light up the night sky. Hindu temples hold special ceremonies and community gatherings throughout the five days.",
    scriptureRef: "Ramayana (Valmiki)",
    scriptureText:
      "The city of Ayodhya was illuminated on all sides with rows of lamps. The inhabitants celebrated with music, dance, and festivities, their hearts overflowing with joy at the return of their beloved king.",
  },
  {
    slug: "holi",
    name: "Holi",
    subtitle: "Festival of Colors",
    color: "#E040FB",
    description:
      "Holi is spring's most joyful arrival — a festival where social hierarchies dissolve, strangers become friends, and everyone gets covered in brilliant color. It celebrates love, renewal, and the victory of devotion over arrogance.",
    significance:
      "Holi marks the victory of devotee Prahlada over his arrogant father Hiranyakashipu, with the help of Goddess Holika. The evening bonfire (Holika Dahan) burns away evil and ego. The following morning's color play celebrates the divine love of Krishna and Radha and welcomes spring's arrival.",
    howObserved:
      "On the evening before, bonfires (Holika Dahan) are lit in communities across America. The next morning, people gather outdoors to throw colored powders (gulal) and water at each other. Thandai, gujiya sweets, and festive foods are shared. Music, dancing, and general mayhem follow. Dress in white — you'll leave in every color.",
    scriptureRef: "Bhagavata Purana, Book 7",
    scriptureText:
      "Prahlada said: I find no difference between fire and water, poison and nectar, friend and foe — for the Lord of the universe is everywhere, and in Him I take refuge.",
  },
  {
    slug: "navratri",
    name: "Navratri",
    subtitle: "Nine Nights of the Divine Feminine",
    color: "#D4AF37",
    description:
      "Nine nights of devotion to Goddess Durga in her nine forms — Navratri is one of the most widely observed Hindu festivals, celebrated with fasting, prayer, Garba dance, and the power of shakti (divine feminine energy).",
    significance:
      "Navratri celebrates the victory of Goddess Durga over the buffalo demon Mahishasura after nine days of battle. Each of the nine nights honors a different form of Devi: Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri.",
    howObserved:
      "Many Hindus fast during Navratri, consuming only fruits and specific foods. Evenings are celebrated with Garba — one of India's most energetic and beautiful dance traditions — and Dandiya Raas, a stick dance performed in circles. Temples hold elaborate pujas and aartis. The tenth day, Dussehra, marks Durga's victory.",
    scriptureRef: "Devi Mahatmya (Markandeya Purana)",
    scriptureText:
      "You are the supreme knowledge, the great illusion, the great intelligence and contemplation. You are the great delusion, the great sleep, and also the great hunger.",
  },
  {
    slug: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    subtitle: "Birthday of the Remover of Obstacles",
    color: "#FF5722",
    description:
      "Ganesh Chaturthi celebrates the birth of Lord Ganesha — the elephant-headed deity of wisdom, beginnings, and the removal of obstacles. Across America and India, elaborate clay idols are installed, worshipped for days, and ceremonially immersed in water.",
    significance:
      "Lord Ganesha is revered as Vighnaharta (remover of obstacles) and Buddhidata (giver of wisdom). He is the first deity invoked before any important undertaking — from starting a business to beginning a prayer. His birth is a cosmic event celebrated with ten days of public festivity, particularly in Maharashtra where it became a movement of national pride.",
    howObserved:
      "Elaborate clay or plaster idols of Ganesha are installed in homes and community pandals. Daily prayers, offerings of modak (sweet dumplings), and aartis are performed. After 1.5, 5, 7, or 10 days, the idol is carried in a procession and immersed (visarjan) in a river or ocean, symbolizing Ganesha's return to Mount Kailash.",
    scriptureRef: "Ganesha Purana",
    scriptureText:
      "I bow to Ganesha, the first among gods, who is worshipped before all rituals, whose feet are the refuge of the wise, and whose mere thought removes all obstacles.",
  },
  {
    slug: "raksha-bandhan",
    name: "Raksha Bandhan",
    subtitle: "The Bond of Protection",
    color: "#F06292",
    description:
      "Raksha Bandhan is a celebration of the bond between brothers and sisters — one of the most tender and enduring festivals in the Hindu calendar. A sister ties a thread (rakhi) on her brother's wrist; he promises to protect her. Simple, powerful, and deeply human.",
    significance:
      "Raksha Bandhan (raksha = protection, bandhan = bond) honors the sacred relationship between siblings. The festival has mythological roots in the story of Indrani tying a thread on Indra's wrist before battle, and Draupadi tearing cloth to bandage Krishna's wound — he later saved her in her time of need. The exchange symbolizes mutual care and lifelong commitment.",
    howObserved:
      "On Raksha Bandhan, sisters tie rakhis — decorative threads, often with flowers, beads, or pendants — on their brothers' right wrists. Brothers give gifts and swear to protect their sisters. In America, families celebrate with sweets, family meals, and video calls with siblings across time zones. The festival transcends biology — close friends and cousins exchange rakhis too.",
    scriptureRef: "Bhavishya Purana",
    scriptureText:
      "The bond tied today is not mere thread — it is the cord of love, the promise of protection, the invisible weave that holds a family together through every season of life.",
  },
  {
    slug: "janmashtami",
    name: "Janmashtami",
    subtitle: "The Birth of Krishna",
    color: "#1565C0",
    description:
      "Janmashtami celebrates the birth of Lord Krishna — philosopher, warrior, charioteer, divine lover, and the voice of the Bhagavad Gita. Midnight celebrations mark the moment this most beloved of Hindu deities entered the world.",
    significance:
      "Krishna was born at midnight in a prison cell to Devaki and Vasudeva, immediately transported to safety by his father through a flooded river to the village of Gokul. His life story — from mischievous child in Vrindavan to wise charioteer on the battlefield of Kurukshetra — is the heart of the Mahabharata and the Bhagavad Gita.",
    howObserved:
      "Devotees fast all day on Janmashtami and break the fast only at midnight, when Krishna was born. Temples fill with bhajans, kirtan, and theatrical reenactments of Krishna's birth. Dahi Handi — where teams of young men form human pyramids to break a clay pot of curd hung high above — is a festive highlight in many communities.",
    scriptureRef: "Bhagavad Gita 4:7-8",
    scriptureText:
      "Whenever righteousness declines and unrighteousness prevails, I manifest myself. For the protection of the good, for the destruction of the wicked, and for the establishment of righteousness, I come into being age after age.",
  },
  {
    slug: "maha-shivaratri",
    name: "Maha Shivaratri",
    subtitle: "The Great Night of Shiva",
    color: "#4527A0",
    description:
      "Maha Shivaratri is one of Hinduism's most sacred nights — a vigil of prayer, fasting, and meditation honoring Lord Shiva, the destroyer and transformer who dances at the edge of creation and dissolution.",
    significance:
      "On this night, it is said that Shiva performed the Tandava — the cosmic dance of creation, preservation, and destruction. It is also the night of Shiva and Parvati's divine wedding. For devotees, Maha Shivaratri is an opportunity to transcend the ego and touch the infinite — a night when the veil between the ordinary and the sacred grows thin.",
    howObserved:
      "Devotees fast and stay awake through the night in meditation and prayer. The Shivalingam is bathed with milk, honey, yogurt, ghee, and water in the ritual of Abhishekam. Four prahar (three-hour periods) of worship are performed through the night. Bilva leaves are offered to Shiva. Temples hold all-night vigils filled with chanting and bhajans.",
    scriptureRef: "Shiva Purana",
    scriptureText:
      "He who worships me on Shivaratri with leaves, flowers, fruits, and water — and with devotion in his heart — reaches me. There is no stricter fast, no more potent night.",
  },
  {
    slug: "ram-navami",
    name: "Ram Navami",
    subtitle: "Birthday of Lord Rama",
    color: "#2E7D32",
    description:
      "Ram Navami celebrates the birth of Lord Rama — the seventh avatar of Vishnu, the ideal king, the dutiful son, the devoted husband, and the embodiment of righteousness. His story is the Ramayana: one of the greatest epics ever told.",
    significance:
      "Rama was born in Ayodhya as the ideal human — a prince who chose exile over dishonor, a husband who went to war for love, a king whose reign became the standard for just governance. Ram Rajya (the kingdom of Rama) remains the Hindu ideal of a just, prosperous, and righteous society.",
    howObserved:
      "Temples hold special pujas and recitations of the Ramayana. Devotees observe fasts and offer tulsi (holy basil) and flowers to Rama's image. Bhajans and kirtan fill the air. In many communities, the full Ramayana is recited over nine days (Akhand Ramayana). Processions with idols of Ram, Sita, Lakshmana, and Hanuman mark the day.",
    scriptureRef: "Valmiki Ramayana, Balakanda",
    scriptureText:
      "He is of handsome appearance, of large shoulders, long-armed, conch-shaped neck, and broad chest. He is the refuge of all people, steady in truth, and devoted to the welfare of all.",
  },
];

export function getHoliday(slug: string): Holiday | undefined {
  return holidays.find((h) => h.slug === slug);
}
