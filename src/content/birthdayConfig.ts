/**
 * CENTRAL PERSONALIZATION CONFIGURATION
 * 
 * Project: "TO MY MAMA ❤️"
 * Dedicated to: Veyaashun
 * Created by: Sree Sasmitha
 * Birthday: 26 October 2026
 * Special Nickname: Mama
 * Special Song: Munbe Vaa
 * 
 * This file is the single source of truth for all personal details,
 * story texts, media links, and customizable components.
 */

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subtext?: string;
  date?: string;
  isPortrait?: boolean;
}

export interface MemoryItem {
  id: string;
  title: string;
  tagline: string;
  date?: string;
  description: string;
  reflection?: string;
  iconName: string;
}

export interface BirthdayConfig {
  birthdayBoy: string;
  girlfriend: string;
  nickname: string;
  birthdayDate: string; // ISO format: YYYY-MM-DD
  relationshipStartDate: string | null; // Keep null until official date is provided!
  relationshipDurationText: string;
  theme: string;
  musicEnabled: boolean;
  specialSong: {
    title: string;
    artist: string;
    source: string;
    fallbackSource: string;
    lyricsExcerpt: string;
    tamilExcerpt: string;
    meaning: string;
  };
  countdownEnabled: boolean;
  photoGalleryEnabled: boolean;
  photos: PhotoItem[];
  memories: MemoryItem[];
  story: {
    secretEntry: {
      salutation: string;
      line1: string;
      line2: string;
      buttonText: string;
    };
    birthdayReveal: {
      heading1: string;
      heading2: string;
      subheading: string;
      wishPrompt: string;
    };
    littleWorld: {
      chapterTitle: string;
      heading: string;
      paragraphs: string[];
    };
    collegeChapter: {
      chapterTitle: string;
      heading: string;
      highlight: string;
      paragraphs: string[];
    };
    silenceSection: {
      chapterTitle: string;
      heading: string;
      quote: string;
      reflection: string;
    };
    safePlaceSection: {
      chapterTitle: string;
      heading: string;
      keyLine: string;
      message: string;
    };
    worldDisappears: {
      chapterTitle: string;
      heading: string;
      keyLine: string;
      reflection: string;
    };
    helpedMeRise: {
      chapterTitle: string;
      heading: string;
      keyLine: string;
      message: string;
      gratitude: string;
    };
    expectations: {
      chapterTitle: string;
      heading: string;
      lines: string[];
      conclusion: string;
    };
    futureWishes: {
      chapterTitle: string;
      heading: string;
      intro: string;
      wishes: {
        title: string;
        description: string;
        icon: string;
      }[];
      closing: string;
    };
    finalSurprise: {
      heading: string;
      subheading: string;
      buttonText: string;
      climaxLines: string[];
      grandBirthdayGreeting: string;
      ultimateAffirmation: string;
      gratitudeLine: string;
      signature: string;
    };
  };
  birthdayLetter: {
    salutation: string;
    body: string[];
    closing: string;
    author: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  birthdayBoy: "Veyaashun",
  girlfriend: "Sree Sasmitha",
  nickname: "Mama",
  birthdayDate: "2026-10-26",
  
  // Rule: Do not invent relationship start date. Kept disabled until official date is provided.
  relationshipStartDate: null,
  relationshipDurationText: "1 month and 6 days", // duration when originally shared
  
  theme: "midnight-romance",
  musicEnabled: true,
  countdownEnabled: false, // Optional countdown; false to give immediate priority to surprise
  photoGalleryEnabled: true,

  specialSong: {
    title: "Munbe Vaa",
    artist: "A.R. Rahman • Shreya Ghoshal • Naresh Iyer",
    source: "/audio/munbe-vaa.mp3",
    fallbackSource: "/audio/Munbe Vaa.mp3",
    tamilExcerpt: "முன்பே வா என் அன்பே வா... ஊனே வா உயிரே வா...",
    lyricsExcerpt: "Munbe vaa en anbe vaa, oone vaa uyire vaa...",
    meaning: "A song of timeless longing, unspoken devotion, and emotions that run deeper than words can ever hold."
  },

  photos: [
    {
      id: "photo-1",
      src: "/images/veyaashun-1.jpeg",
      alt: "Veyaashun and Sree Sasmitha smiling together",
      caption: "That Irresistible Energy",
      subtext: "The smile that brings so much warmth into my world. With you, every ordinary moment turns special.",
      isPortrait: true
    },
    {
      id: "photo-2",
      src: "/images/veyaashun-2.jpeg",
      alt: "Veyaashun and Sree standing close together",
      caption: "In Your Quiet Comfort",
      subtext: "You don't need a thousand words. Just having you right beside me is my greatest peace.",
      isPortrait: true
    },
    {
      id: "photo-3",
      src: "/images/veyaashun-3.jpeg",
      alt: "Sweet moment shared between Veyaashun and Sree",
      caption: "My Safe Place",
      subtext: "Some people make the world louder. You make my whole universe feel safer.",
      isPortrait: true
    },
    {
      id: "photo-4",
      src: "/images/veyaashun-4.jpeg",
      alt: "Veyaashun and Sree Sasmitha together",
      caption: "More Than I Ever Expected",
      subtext: "From a familiar face in college to the person my heart holds so dearly. Forever grateful for you.",
      isPortrait: true
    }
  ],

  memories: [
    {
      id: "mem-1",
      title: "Our College Days",
      tagline: "The energetic friend who stood out",
      description: "When I first knew you, you were that energetic friend in college — someone I considered one of the best people around. I never knew a familiar presence would one day become my whole world.",
      reflection: "Life has a gentle way of quietly bringing the most meaningful souls into our lives.",
      iconName: "GraduationCap"
    },
    {
      id: "mem-2",
      title: "The Comfort in Your Silence",
      tagline: "Unspoken warmth that needs no words",
      description: "You may be silent with me, but somehow, my heart has found so many reasons to adore you. I don't need every silence filled; being beside you is pure peace.",
      reflection: "Sometimes, presence speaks louder than anything the world could say.",
      iconName: "Moon"
    },
    {
      id: "mem-3",
      title: "When You Helped Me Rise",
      tagline: "The strength when I needed it most",
      description: "When I was at my lowest, you helped me find the strength to rise again. I don't know whether you realize how much that means to me, Mama, but I will carry that gratitude forever.",
      reflection: "A hand to hold when the darkness felt heavy — you were my light.",
      iconName: "Sparkles"
    },
    {
      id: "mem-4",
      title: "Becoming My Mama",
      tagline: "Someone who means more than I ever expected",
      description: "Somewhere along the way, without warning, you became someone I care about more deeply than I ever thought I would. Happy Birthday to the one who holds my heart.",
      reflection: "More than I ever expected, and everything I cherish today.",
      iconName: "Heart"
    }
  ],

  story: {
    secretEntry: {
      salutation: "Hey, Mama...",
      line1: "Someone has made a little world just for you.",
      line2: "And today, it's all about you.",
      buttonText: "Open Your Surprise ❤️"
    },
    birthdayReveal: {
      heading1: "HAPPY BIRTHDAY, VEYAASHUN ❤️",
      heading2: "HAPPY BIRTHDAY, MAMA!",
      subheading: "Today is your day, and I wanted to create something that could show you just how special you have become to me.",
      wishPrompt: "Make a birthday wish, tap the candle, and step into our story ✨"
    },
    littleWorld: {
      chapterTitle: "Chapter I • The Beginning",
      heading: "A Little Piece of My Heart",
      paragraphs: [
        "Mama, I could have sent you a simple birthday message. But somehow, that didn't feel like enough for someone who has become this important to me.",
        "So I wanted to create something a little different. A small place filled with my thoughts, my feelings, and the things I don't always know how to say.",
        "Every little part of this website is my way of reminding you that you matter to me more than you might realize."
      ]
    },
    collegeChapter: {
      chapterTitle: "Chapter II • The Spark",
      heading: "From My College Days to Someone So Special",
      highlight: "I first knew you as that energetic person in college, someone who brought his own kind of energy into the place.",
      paragraphs: [
        "When I first knew you, you were that energetic friend from college. I never knew that someone I knew in that familiar place would eventually become this important to me.",
        "Life has a funny way of bringing people closer without telling us how much they might come to mean to us.",
        "And somehow, step by step, you became my Mama."
      ]
    },
    silenceSection: {
      chapterTitle: "Chapter III • Your Presence",
      heading: "Your Silence, My Favourite Sound",
      quote: "You may be silent, Mama, but somehow, my heart has found so many reasons to adore you.",
      reflection: "I don't need you to fill every moment with words. There is something about simply having you beside me that makes those moments special. In a world full of noise, your quiet presence is the most comforting place I know."
    },
    safePlaceSection: {
      chapterTitle: "Chapter IV • Sanctuary",
      heading: "Somehow, You Feel Like Home",
      keyLine: "Some people make the world feel louder. You make my world feel safer.",
      message: "Mama, I don't know if you realize how safe I feel when you're beside me. Sometimes, just having you there is enough to make everything feel a little easier. You are my safe shelter."
    },
    worldDisappears: {
      chapterTitle: "Chapter V • Stillness",
      heading: "When I'm With You, Everything Else Fades Away",
      keyLine: "When I'm with you, Mama, I forget about the whole world.",
      reflection: "For those moments, the world outside grows quiet, distant lights fade, and nothing else seems to matter. All I ever want is to pause time and enjoy every quiet second right beside you."
    },
    helpedMeRise: {
      chapterTitle: "Chapter VI • The Light",
      heading: "You Were There When I Needed Someone",
      keyLine: "When I was at my lowest, you helped me rise.",
      message: "I don't know whether you realize how much that means to me, Mama. You were there when things felt overwhelming, and somehow, you became someone who helped me find the strength to stand tall again.",
      gratitude: "I never expected that you would mean this much to me, but I am genuinely, forever grateful for the comfort and strength you brought into my life."
    },
    expectations: {
      chapterTitle: "Chapter VII • The Revelation",
      heading: "I Never Expected You to Mean This Much",
      lines: [
        "I didn't expect this.",
        "I didn't expect you to become so important.",
        "I didn't expect your silence to become something I adore.",
        "I didn't expect to feel this safe beside someone.",
        "I didn't expect someone to help me rise when I was at my lowest.",
        "And I never expected that, in such a short time, you would mean this much to me."
      ],
      conclusion: "But here you are, Mama. Someone I care about so deeply, someone whose presence has become my greatest treasure, and someone I am genuinely overjoyed to celebrate today."
    },
    futureWishes: {
      chapterTitle: "Chapter VIII • Wishes",
      heading: "Everything Beautiful That I Wish for You",
      intro: "On your birthday, Mama, I wish you a life brimming with pure joy, gentle days, wonderful opportunities, and dreams turning into reality.",
      wishes: [
        {
          title: "Peace in Your Heart",
          description: "May your days be free from worry, filled with calmness and quiet contentment wherever you go.",
          icon: "Moon"
        },
        {
          title: "Strength & Success",
          description: "May every goal you work towards bear fruit, and may your courage never waver in front of any challenge.",
          icon: "Shield"
        },
        {
          title: "Endless Reasons to Smile",
          description: "May you always find small joys, genuine laughter, and people who remind you of how extraordinary you are.",
          icon: "Smile"
        },
        {
          title: "Beautiful Opportunities",
          description: "May life open doors you've always dreamed of, giving you the heights and triumphs you truly deserve.",
          icon: "Sparkles"
        }
      ],
      closing: "And selfishly, I hope I get to be part of many more beautiful memories with you."
    },
    finalSurprise: {
      heading: "Mama, before you go...",
      subheading: "There is one last thing I want to whisper to your heart.",
      buttonText: "One Last Thing ❤️",
      climaxLines: [
        "You came into my life in a way I never expected, and somehow, you became someone I never want to take for granted.",
        "You make me feel safe. Your silence makes me smile. Your presence makes me forget the world. And the way you helped me rise will always mean something special to me."
      ],
      grandBirthdayGreeting: "HAPPY BIRTHDAY, MY MAMA ❤️",
      ultimateAffirmation: "YOU MEAN MORE TO ME THAN I EVER EXPECTED.",
      gratitudeLine: "Forever grateful that I got to know you.",
      signature: "With all my love,\nSree Sasmitha."
    }
  },

  birthdayLetter: {
    salutation: "Happy Birthday, Mama ❤️",
    body: [
      "I don't even know where to begin because I never expected you to become this important to me.",
      "When I first knew you, you were that energetic friend from college. I never imagined that someone I knew in that familiar place would become someone who means this much to me.",
      "But somehow, things changed, and now you are someone I care about more deeply than I ever expected.",
      "You may be silent with me, but you know what, Mama? I've become obsessed with your silence. There is something about simply having you beside me that makes me feel safe and happy.",
      "Whenever I am with you, I forget about the whole world. For those moments, nothing else seems as important as the time I get to spend with you.",
      "And one thing I will always be grateful for is the way you helped me when I was at my lowest. You helped me find the strength to rise, and I don't think you fully understand how much that means to me.",
      "I never expected this much from you. I never expected that someone could become this special to me in such a short time.",
      "But here I am, celebrating your birthday and trying to put into words how much you mean to me.",
      "Today, I wish you happiness that stays with you, peace in your heart, success in everything you work towards, and countless reasons to smile.",
      "I hope life gives you beautiful opportunities, wonderful memories, and everything your heart has been wishing for.",
      "And I hope that, along the way, we get to create many more little memories together.",
      "Thank you for being someone who makes me feel safe. Thank you for the strength you have given me. And thank you for becoming someone I never knew I would care about this much.",
      "Happy Birthday, Veyaashun.",
      "Happy Birthday, my Mama. ❤️"
    ],
    closing: "With love,",
    author: "Your Sree Sasmitha."
  }
};
