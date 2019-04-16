/*
'use strict';

// accordion
const accordionTriggers = document.getElementsByClassName('accordion-trigger');
const facultyImages = document.getElementsByClassName('faculty-images');
let accordionTriggerClickCountDeans = 0;
let accordionTriggerClickCountAdvisors = 0;
let accordionTriggerClickCountCC = 0;
let accordionTriggerClickCountUD = 0;
let accordionTriggerClickCountASD = 0;
let accordionTriggerClickCountTAD = 0;
let accordionTriggerClickCountISSD = 0;
let accordionTriggerClickCountISED = 0;

// sets "faculty-images" to aria-hidden="true" when page loads
for (let i = 0; i < facultyImages.length; i++) {
  facultyImages[i].setAttribute('aria-hidden', true);
};

// Makes "Read More" links not tabbable when page loads
for (let i = 0; i < accordionTriggers.length; i++) {
  for (let x = 0; x < accordionTriggers[i].nextElementSibling.children.length; x++) {
    accordionTriggers[i].nextElementSibling.children[x].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
  }
};

// toggles accordion on click
for (let i = 0; i < accordionTriggers.length; i++) {
  accordionTriggers[i].addEventListener('click', (e) => {
    e.currentTarget.nextElementSibling.classList.toggle('js-faculty-images');
  });
};

// manages tabIndex when 'accordion-trigger'(s) are toggled. Further research needed for cleaner solution. Maybe make repeated code a function call?
accordionTriggers[0].addEventListener('click', (e) => {
  accordionTriggerClickCountDeans++;
  if (accordionTriggerClickCountDeans%2 == 0) {
    facultyImages[0].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[0].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[1].addEventListener('click', (e) => {
  accordionTriggerClickCountAdvisors++;
  if (accordionTriggerClickCountAdvisors%2 == 0) {
    facultyImages[1].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[1].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[2].addEventListener('click', (e) => {
  accordionTriggerClickCountCC++;
  if (accordionTriggerClickCountCC%2 == 0) {
    facultyImages[2].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[2].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[3].addEventListener('click', (e) => {
  accordionTriggerClickCountUD++;
  if (accordionTriggerClickCountUD%2 == 0) {
    facultyImages[3].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[3].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[4].addEventListener('click', (e) => {
  accordionTriggerClickCountASD++;
  if (accordionTriggerClickCountASD%2 == 0) {
    facultyImages[4].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[4].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[5].addEventListener('click', (e) => {
  accordionTriggerClickCountTAD++;
  if (accordionTriggerClickCountTAD%2 == 0) {
    facultyImages[5].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[5].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[6].addEventListener('click', (e) => {
  accordionTriggerClickCountISSD++;
  if (accordionTriggerClickCountISSD%2 == 0) {
    facultyImages[6].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[6].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});

accordionTriggers[7].addEventListener('click', (e) => {
  accordionTriggerClickCountISED++;
  if (accordionTriggerClickCountISED%2 == 0) {
    facultyImages[7].setAttribute('aria-hidden', true);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[7].setAttribute('aria-hidden', false);
    for (let i = 0; i < e.currentTarget.nextElementSibling.children.length; i++) {
      e.currentTarget.nextElementSibling.children[i].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    }; 
  };
});
*/

// es5
'use strict';

// accordion

var accordionTriggers = document.getElementsByClassName('accordion-trigger');
var facultyImages = document.getElementsByClassName('faculty-images');
var accordionTriggerClickCountDeans = 0;
var accordionTriggerClickCountAdvisors = 0;
var accordionTriggerClickCountCC = 0;
var accordionTriggerClickCountUD = 0;
var accordionTriggerClickCountASD = 0;
var accordionTriggerClickCountTAD = 0;
var accordionTriggerClickCountISSD = 0;
var accordionTriggerClickCountISED = 0;

// sets "faculty-images" to aria-hidden="true" when page loads
for (var i = 0; i < facultyImages.length; i++) {
  facultyImages[i].setAttribute('aria-hidden', true);
};

// Makes "Read More" links not tabbable when page loads
for (var _i = 0; _i < accordionTriggers.length; _i++) {
  for (var x = 0; x < accordionTriggers[_i].nextElementSibling.children.length; x++) {
    accordionTriggers[_i].nextElementSibling.children[x].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
  }
};

// toggles accordion on click
for (var _i2 = 0; _i2 < accordionTriggers.length; _i2++) {
  accordionTriggers[_i2].addEventListener('click', function (e) {
    e.currentTarget.nextElementSibling.classList.toggle('js-faculty-images');
  });
};

// manages tabIndex when 'accordion-trigger'(s) are toggled. Further research needed for cleaner solution. Maybe make repeated code a function call?
accordionTriggers[0].addEventListener('click', function (e) {
  accordionTriggerClickCountDeans++;
  if (accordionTriggerClickCountDeans % 2 == 0) {
    facultyImages[0].setAttribute('aria-hidden', true);
    for (var _i3 = 0; _i3 < e.currentTarget.nextElementSibling.children.length; _i3++) {
      e.currentTarget.nextElementSibling.children[_i3].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[0].setAttribute('aria-hidden', false);
    for (var _i4 = 0; _i4 < e.currentTarget.nextElementSibling.children.length; _i4++) {
      e.currentTarget.nextElementSibling.children[_i4].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[1].addEventListener('click', function (e) {
  accordionTriggerClickCountAdvisors++;
  if (accordionTriggerClickCountAdvisors % 2 == 0) {
    facultyImages[1].setAttribute('aria-hidden', true);
    for (var _i5 = 0; _i5 < e.currentTarget.nextElementSibling.children.length; _i5++) {
      e.currentTarget.nextElementSibling.children[_i5].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[1].setAttribute('aria-hidden', false);
    for (var _i6 = 0; _i6 < e.currentTarget.nextElementSibling.children.length; _i6++) {
      e.currentTarget.nextElementSibling.children[_i6].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[2].addEventListener('click', function (e) {
  accordionTriggerClickCountCC++;
  if (accordionTriggerClickCountCC % 2 == 0) {
    facultyImages[2].setAttribute('aria-hidden', true);
    for (var _i7 = 0; _i7 < e.currentTarget.nextElementSibling.children.length; _i7++) {
      e.currentTarget.nextElementSibling.children[_i7].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[2].setAttribute('aria-hidden', false);
    for (var _i8 = 0; _i8 < e.currentTarget.nextElementSibling.children.length; _i8++) {
      e.currentTarget.nextElementSibling.children[_i8].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[3].addEventListener('click', function (e) {
  accordionTriggerClickCountUD++;
  if (accordionTriggerClickCountUD % 2 == 0) {
    facultyImages[3].setAttribute('aria-hidden', true);
    for (var _i9 = 0; _i9 < e.currentTarget.nextElementSibling.children.length; _i9++) {
      e.currentTarget.nextElementSibling.children[_i9].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[3].setAttribute('aria-hidden', false);
    for (var _i10 = 0; _i10 < e.currentTarget.nextElementSibling.children.length; _i10++) {
      e.currentTarget.nextElementSibling.children[_i10].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[4].addEventListener('click', function (e) {
  accordionTriggerClickCountASD++;
  if (accordionTriggerClickCountASD % 2 == 0) {
    facultyImages[4].setAttribute('aria-hidden', true);
    for (var _i11 = 0; _i11 < e.currentTarget.nextElementSibling.children.length; _i11++) {
      e.currentTarget.nextElementSibling.children[_i11].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[4].setAttribute('aria-hidden', false);
    for (var _i12 = 0; _i12 < e.currentTarget.nextElementSibling.children.length; _i12++) {
      e.currentTarget.nextElementSibling.children[_i12].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[5].addEventListener('click', function (e) {
  accordionTriggerClickCountTAD++;
  if (accordionTriggerClickCountTAD % 2 == 0) {
    facultyImages[5].setAttribute('aria-hidden', true);
    for (var _i13 = 0; _i13 < e.currentTarget.nextElementSibling.children.length; _i13++) {
      e.currentTarget.nextElementSibling.children[_i13].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[5].setAttribute('aria-hidden', false);
    for (var _i14 = 0; _i14 < e.currentTarget.nextElementSibling.children.length; _i14++) {
      e.currentTarget.nextElementSibling.children[_i14].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[6].addEventListener('click', function (e) {
  accordionTriggerClickCountISSD++;
  if (accordionTriggerClickCountISSD % 2 == 0) {
    facultyImages[6].setAttribute('aria-hidden', true);
    for (var _i15 = 0; _i15 < e.currentTarget.nextElementSibling.children.length; _i15++) {
      e.currentTarget.nextElementSibling.children[_i15].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[6].setAttribute('aria-hidden', false);
    for (var _i16 = 0; _i16 < e.currentTarget.nextElementSibling.children.length; _i16++) {
      e.currentTarget.nextElementSibling.children[_i16].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});

accordionTriggers[7].addEventListener('click', function (e) {
  accordionTriggerClickCountISED++;
  if (accordionTriggerClickCountISED % 2 == 0) {
    facultyImages[7].setAttribute('aria-hidden', true);
    for (var _i17 = 0; _i17 < e.currentTarget.nextElementSibling.children.length; _i17++) {
      e.currentTarget.nextElementSibling.children[_i17].lastElementChild.lastElementChild.setAttribute('tabIndex', '-1');
    };
  } else {
    facultyImages[7].setAttribute('aria-hidden', false);
    for (var _i18 = 0; _i18 < e.currentTarget.nextElementSibling.children.length; _i18++) {
      e.currentTarget.nextElementSibling.children[_i18].lastElementChild.lastElementChild.removeAttribute('tabIndex');
    };
  };
});