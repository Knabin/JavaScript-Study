if (-1 || 0) alert('first');        // -1(truthy) -> first
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');// -1, 1(truthy) -> third