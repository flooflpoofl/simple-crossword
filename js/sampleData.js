const SAMPLE_DATA = [
    {
        width: 9,
        height: 6,
        squares: [
            // ROW 1
            [
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'töm-<br>mer<br>toan'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 's',
                    arrows: [
                        {
                            type: 'turn',
                            position: 'tl',
                            orientation: 'rd'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'träd<br>med<br>löv'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 3,
                            text: 'smila'
                        },
                        {
                            span: 5,
                            text: 'är in-<br>slagna'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'l',
                    arrows: [
                        {
                            type: 'turn',
                            position: 'tl',
                            orientation: 'rd'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'ut-<br>för'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'runda<br>som<br>äggen'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'inte<br>nej'
                        }
                    ]
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'plats<br>för<br>publik'
                        }
                    ]
                }
            ],
            // ROW 2
            [
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'färg-<br>glad<br>fågel'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'p',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'p',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'e',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'g',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'o',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'j',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                }
                
            ],
            // ROW 3
            [
                {
                    type: 'solution',
                    correct: 'k',
                    arrows: [
                        {
                            type: 'turn',
                            position: 'bl',
                            orientation: 'ur'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'o',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'l',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 3,
                            text: 'lär in'
                        },
                        {
                            span: 5,
                            text: 'landet<br>i havet'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'ö',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'v',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'r',
                    arrows: []
                }
                
            ],
            // ROW 4
            [
                {
                    type: 'key',
                    keys: [
                        {
                            span: 5,
                            text: 'segt<br>godis'
                        },
                        {
                            span: 3,
                            text: 'ändan'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'l',
                    arrows: []
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 3,
                            text: 'ratta'
                        },
                        {
                            span: 5,
                            text: 'rad att<br>vänta i'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'k',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'ö',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'r',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'icke<br>sa<br>nicke'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'e',
                    arrows: []
                }   
            ],
            // ROW 5
            [
                {
                    type: 'solution',
                    correct: 'b',
                    arrows: [
                        {
                            type: 'turn',
                            position: 'tl',
                            orientation: 'dr'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'k',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'e',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'n',
                    arrows: []
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'mjuk<br>att<br>ta på'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'l',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'e',
                    arrows: [
                        {   
                            type: 'straight',
                            position: 'tc',
                            orientation: 'd'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'n',
                    arrows: []
                }
                
            ],
            // ROW 6
            [
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'höjde<br>röst-<br>en'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'r',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'ö',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 't',
                    arrows: []
                },
                {
                    type: 'key',
                    keys: [
                        {
                            span: 8,
                            text: 'råka<br>för-<br>störa'
                        }
                    ]
                },
                {
                    type: 'solution',
                    correct: 'p',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'j',
                    arrows: []
                },
                {
                    type: 'solution',
                    correct: 'a',
                    arrows: []
                }
                
            ]

        ]
    }
];