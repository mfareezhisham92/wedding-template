const WeddingStoryBuilder = {

    build(preparation) {

        return [

            // Scene 1

            // Scene 2

            {
    type: "formal-invitation",

    basmala:
        "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",

    label:
        "Majlis Walimatul Urus",

    introduction:
        "Dengan penuh kesyukuran ke hadrat Allah SWT, kami dengan segala hormatnya menjemput Dato’ / Datin / Tuan / Puan / Encik / Cik / Saudara / Saudari ke majlis perkahwinan putera kami",

    hosts:
        invitation.family.fatherName +
        " & " +
        invitation.family.motherName,

    groom:
        invitation.couple.groomName,

    bride:
        invitation.couple.brideName,

    date:
        invitation.celebration.date,

    time:
        invitation.celebration.startTime +
        " – " +
        invitation.celebration.endTime,

    venue:
        invitation.celebration.venue +
        ", " +
        invitation.celebration.cityState,

    rsvp:
        invitation.optional.rsvp,

    duration: 14000,

    transition: "fade",

    background: "royal",

    image: null
}

        ];

    }

};
