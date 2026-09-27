var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec51-ApproximatingArea",
  "level": "1",
  "url": "sec51-ApproximatingArea.html",
  "type": "Section",
  "number": "5.1",
  "title": "Approximating and Computing Area",
  "body": " Approximating and Computing Area   The big question in this section is how to approximate the area under the curve of a function . We will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation        Let's find the area under the curve of some simple-looking functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the base of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is      These problems are easy if the region of interest is a known geometric figure... But things are not always so nice... We will need a way to find (or at least approximate) the area under the graph of any function.   Approximating Area by Rectangles  If the region under the curve doesn't look like a known geometric figure, then we can't find the area by searching an area formula we learned before. Before thinking about finding the precise area under the curve, let's come up with a method to approximate the area.  One tool we have in our toolkit is to split the region into a bunch of rectangle strips and we can approximate the area by summing the area of these rectangle strips.   Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.    Observe that Richard made a choice of aligning the upper left corner of each rectangle on the curve when he constructed his three rectangles. Let's give this method of approximation a fancy name! This is called the left-endpoint approximation . Notationally speaking, we can represent this approximation by (left-endpoint approximation using three rectangles).  You may be wondering if we can align the upper right corner of each rectangle on the curve when you construct the rectangle... We certainly can! Let's try the same problem but with a slightly different way of constructing the rectangles!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.    Similarly, we can name this method the right-endpoint approximation ! Notationally speaking, we can represent this approximation by (right-endpoint approximation using three rectangles).  We can actually make it even more fancier by aligning the midpoint of each rectangle on the curve when you construct the rectangle! There are pros and cons to make the method fancier. Let's try the same problem with this slightly fancier method and see what the pros and cons are!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .    Again, we can name this even fancier method the midpoint approximation! You can imagine that we can represent this approximation by (midpoint approximation using three rectangles).  You can observe that the midpoint approximation will give a better approximation compared to the left- and the right- endpoint approximation (this is a pro). But the tradeoff here is that the height of each rectangle is a bit more complicated to obtain (this is a con).  When you are approximating something, you usually will need to make a choice between computational power and the accuracy of the approximation . Easier methods will give a less-accurate approximation and more-complicated methods will give a more-accurate approximation.   Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.    Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,     Let's generalize the process! Let's say we want to approximate the area under the graph of on the interval using equal-width rectangles. Then the width of each rectangle is Furthermore, let's index our 's such that and . Then we can approximate the area under the curve as follows:   We can approximate the area once we can partition the interval and figure out the values of all the 's, where is the index. Then we don't have to graph the functions and construct all the rectangles.    Summation Notation  You may get the feeling that there is a pattern in the formulas above. We are adding similar things together. Sometimes it is kind of tedious to write out all the -- addends when the addends are similar with a pattern. Actually we have a special notation in math we can use to add things up with a pattern.     The sum of numbers ( ) is denoted where the greek letter (capital sigma) stands for the sum . denotes the index, the below the denotes the starting value of , and the above the denotes the index ends at .      Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain     Using the summation notation, we can rewrite the formulas for , , and more briefly.          But Richard... why introducing another fancy symbol of to make the formulas even more fancier-looking? Well there are several reasons... One of the reasons we care about in this section is that we can actually insert this to Desmos calculator and let it do the work for you (as opposed to you figuring out all the area of the rectangle stripes... not that you can't do it this way).  Another reason is that we can actually do some manipulation with it (e.g., find the limit of it when we have infinitely many rectangles!) if we want to increase the precision of our apprpoximation. This is A BIG IDEA in integral calculus that we will discuss in the next section!  This is just a quick preview. For those of you who are thinking about taking MTH 253Z Sequences and Series. Guess what a series is! Series, roughly speaking, is the sum of a bunch of things so you will definitely see the all over the place in MTH 253Z.   Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image       Computing Area as the Limit of Approximation  Now that we know how to approximate the area under the curve using rectangles. Then the next natural question here is how to make our approximation better and better.  One thing we can do is to increase the number of rectangle strips . That is, we want to increase the value of in the approximation methods. As is getting larger, this will force the width of each rectangle, , to be smaller and smaller. In other words,   In the following applet, you can see that the apprpoximation is closer and closer to the actual area if we increase the values, regarless of which approximation methods we used .   That is, the actual area can be computed using the limit of our approximation. Let's make it a cool theorem!     If is continuous on , then the left-endpoint, right-endpoint, and the midpoint approximation approches the same limit as . In other words, there is a value of such that If on , then is the area under the graph of on .      But Richard... how can we actually split up the region into infinite number of rectangle strips and find the area of all the strips... This seems impossible to do in practice...  You are correct that this is impossible to achieve in practice... The best we can do is to make our approximation better and better until we are happy about the value (life isn't perfect. how surprising...).  But this is a math class (so we are living in an ideal world where we can assume a lot of things!). If we are given the function, then we actually can compute the actual value of the area under the curve within some interval. This is a central idea of this class.   We are actually ready to formalize these approximation methods in the next section. But if you are feeling a bit of adventurous and devoted to figuring out this limit idea algebraically , feel free to keep reading the next part.    Limit of the approximation algebraically  Recall we can express the sum using the summation notation . Let's do some quick practice to remind us of how it works.   Write out the following summation notation and evaluate it.                                   There are some properties of the summation notation we can use to make our computation easier.    Properties of Summation Notation            for any constant      for any constant         Using these above properties, we can break down a complicated summation notation into smaller pieces (so we can deal with one piece at a time).  There are also three well-known formulas, called the power sums formulas, that tells us the summation of the first integers with powers.    Power Sum Formulas   Let be a natural number. Then                      There are more power sum formulas but they are the most famous three. Rather than actually adding up the numbers, these formulas allow us to compute the sum by plugging in directly.  Let's compute the actual area of some functions algebraically using the summation notation!   Let . Find the actual area under the graph of over the interval , where algebraically.   By , we know that the actual area can be computed by taking the limit of as . Then what is using summation notation?  After you figure out what is, take the limit of it as .    We will let to be the number of rectangle strips. Then the width of each rectangle is Using the summation notation formula for , we obtain   To obtain the actual area, we want to take the limit of as . Then we obtain   What this tells us here is that the area under the graph of over the interval is .    Later in the term, we will derive these formulas to compute the area more efficiently (thanks to FTC!).    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Consider the function on the interval .   Graph the function and highlight the region of interest.    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?         Approximate the area under the graph of the function from to using .      Let . Find , , and on the interval .      Approximate the area under the curve on using four subintervals. The graph of the curve is given below.   The graph of the curve        What is the and in this problem?    Approximate the area using the right-endpoint approximation.    Approximate the area using the left-endpoint approximation.    Approximate the area using the midpoint approximation.        Explain graphically that if is linear on the interval , then the area under the graph on is for all . Don't forget to explain in words what your diagram tells us.     "
},
{
  "id": "sec51-ApproximatingArea-2-2",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#sec51-ApproximatingArea-2-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "  After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation    "
},
{
  "id": "sec51-ApproximatingArea-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#sec51-ApproximatingArea-3",
  "type": "Investigation",
  "number": "5.1.1",
  "title": "",
  "body": "  Let's find the area under the curve of some simple-looking functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the base of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is     "
},
{
  "id": "subsec-511-Approximate_Rectangle-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-4",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-7",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-10",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-10",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .   "
},
{
  "id": "subsec-511-Approximate_Rectangle-14",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-14",
  "type": "Note",
  "number": "5.1.12",
  "title": "Why do I have to approximate the area using rectangles?",
  "body": " Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.  "
},
{
  "id": "subsec-511-Approximate_Rectangle-15",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-15",
  "type": "Example",
  "number": "5.1.14",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,    "
},
{
  "id": "subsec-512-SummationNotation-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum sum "
},
{
  "id": "subsec-512-SummationNotation-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-4",
  "type": "Example",
  "number": "5.1.17",
  "title": "",
  "body": " Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain    "
},
{
  "id": "subsec-512-SummationNotation-11",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-11",
  "type": "Example",
  "number": "5.1.18",
  "title": "",
  "body": " Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image    "
},
{
  "id": "thm-Area-LimitofApproximation",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-Area-LimitofApproximation",
  "type": "Theorem",
  "number": "5.1.20",
  "title": "",
  "body": "  If is continuous on , then the left-endpoint, right-endpoint, and the midpoint approximation approches the same limit as . In other words, there is a value of such that If on , then is the area under the graph of on .   "
},
{
  "id": "subsec-514-LimitSummation-2",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summation notation "
},
{
  "id": "subsec-514-LimitSummation-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-3",
  "type": "Example",
  "number": "5.1.21",
  "title": "",
  "body": " Write out the following summation notation and evaluate it.                                  "
},
{
  "id": "thm-Property-SummationNotation",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-Property-SummationNotation",
  "type": "Theorem",
  "number": "5.1.22",
  "title": "Properties of Summation Notation.",
  "body": " Properties of Summation Notation            for any constant      for any constant       "
},
{
  "id": "subsec-514-LimitSummation-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power sums "
},
{
  "id": "thm-PowerSum",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-PowerSum",
  "type": "Theorem",
  "number": "5.1.23",
  "title": "Power Sum Formulas.",
  "body": " Power Sum Formulas   Let be a natural number. Then                    "
},
{
  "id": "exp-Riemann_Square",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#exp-Riemann_Square",
  "type": "Example",
  "number": "5.1.24",
  "title": "",
  "body": " Let . Find the actual area under the graph of over the interval , where algebraically.   By , we know that the actual area can be computed by taking the limit of as . Then what is using summation notation?  After you figure out what is, take the limit of it as .    We will let to be the number of rectangle strips. Then the width of each rectangle is Using the summation notation formula for , we obtain   To obtain the actual area, we want to take the limit of as . Then we obtain   What this tells us here is that the area under the graph of over the interval is .   "
},
{
  "id": "ws-sec51-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the function on the interval .   Graph the function and highlight the region of interest.    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?      "
},
{
  "id": "ws-sec51-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Approximate the area under the graph of the function from to using .   "
},
{
  "id": "ws-sec51-5",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let . Find , , and on the interval .   "
},
{
  "id": "ws-sec51-6",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Approximate the area under the curve on using four subintervals. The graph of the curve is given below.   The graph of the curve        What is the and in this problem?    Approximate the area using the right-endpoint approximation.    Approximate the area using the left-endpoint approximation.    Approximate the area using the midpoint approximation.     "
},
{
  "id": "ws-sec51-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Explain graphically that if is linear on the interval , then the area under the graph on is for all . Don't forget to explain in words what your diagram tells us.   "
},
{
  "id": "sec52-DefiniteIntegral",
  "level": "1",
  "url": "sec52-DefiniteIntegral.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Definite Integral",
  "body": " The Definite Integral   In this section, we will formalize the three approximation methods and investigate a new concept called definite integral . We will explore some basic properties of definite integrals.    After this section, students will be able to:     understand the concept of Riemann sum, including the construction of rectangles using the given partition and sample points.    understand the concept of definite integrals, including each component of it and its meaning.    evaluate basic definite integrals using either geometry or basic formulas.    apply linearity and basic properties to break apart and evaluate definite integral.        Recall the big goal in is to compute the area under the curve. Let's see if we can come up with some basic formulas we can use directly.  Let and be positive real numbers such that . Find the area of the following function over the indicated interval.     over for any positive real number .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?   P.S.: It is fine if we can't match the shape up with a known geometric shape. Richard actually solved this problem in the previous section with some fancy symbol-pushing algebra.    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the highlighted region isn't a known geometric shape with an area formula. So we can't find the area geometrically...  Richard worked out the problem using in the previous section.  Feel free to expand to see what the answer is.      Riemann Sum and Definite Integral  Recall the approximation methods we learned in : we partitioned some closed interval on the -axis to equal parts and construct rectangles on them. This is a special case of the Riemann Sum .  Riemann sum is a more relaxing (and generalized) version of the three approximation methods we learned. We don't require equal width of the rectangles and we don't have to pick the same point on each interval to compute the height.  To specify a Riemann sum, we choose a partition and a set of sample points :    Partition  of size : a choice of points that divides into subintervals (not necessarily of equal width).      Sample points  : belongs to the subinterval for all (and could be any point in the subinterval).   The lenth of the th subinterval is . The Riemann sum in the sum of the terms that are determined by and . This is denoted by    Construction of     Find the Riemann sum for the function , the partition and the choice of sample points    Let's graph the function first. The label each subinterval and locate the sample point in each of them. Based on this, you should be able to construct four rectangles.    Below is the diagram of the four rectangles:   Construction of for , with and .      From the diagram, we can determine the area of each rectangles.    1st rectangle : the width is and the height is .     2nd rectangle : the width is and the height is .     3rd rectangle : the width is and the height is .     4th rectangle : the width is and the height is .   Hence, the Riemann sum is   The Riemann sum of is an approximation of the area under the curve.    As discussed in , the more rectangles we use to approximate the area under the curve, the more accurate our approximation is. Similarly, with smaller and smaller of each of the width of the rectangle (which forces us to use more and more rectangles to approximate the area), the more accurate the area is.  The difference here is that the width are not necessarily equal. To make sure each rectangle has really really really small width, we want to make sure the maximum width, denoted as , is very very very small. Then we can say that the area under the curve is   As mentioned, again in , it is impossible to find the area of infinite rectangle strips. But you know how to find the area of an arbitrary rectangle strip. This is called a representative rectangle .   Representative Rectangle with width of and the height of .      Imagine each representative rectangle will have the width . Then the area under the curve will equal to the sum of the area of all representative rectangles. Mathematically speaking, we call it the definite integral .   Definite Integral   The definite integral of over , denoted by the integral sign, is the limit of the Riemann sum When the limit exists, we say that is integrable over .    To break down each component,   the integral sign, , means summation (a cursive S).    the is the function value at some random point , which works like the height of the representative rectangle. This is also called the integrand .    the is the width of the representative rectangle ( means when the change is really really really small). This is also called the differential .    the and the tells us about the interval. They are called the limits of integration . is the lower limit and is the upper limit .   Unlike in MTH 251 where I made a big deal on the concept of differentiability , I will not ask you any question on whether or not a function is integrable . This is an analysis concept. For the purpose of this class, just remember that is integrable over if is continuous on a closed interval .    Definite Integral and Signed Area  Now we will investigate the relationship between the area and the definite integral.   Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of .        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  You can imagine that the height of any representative rectangle is .  The combined width of all rectangles is .  Hence,   You can see that the definite integral represents the area of the enclosed region (how surprising... ).     Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  But the issue here is that the function value is ... This can't be the height (since height, geometrically speaking, cannot be negative).  This is a place in math that we have to follow the definition if a conflict arise. Since the definition of the definite integral emphasizes the function value, we will need to use in our computation.  Similarly, the width of all rectangles is .  Hence,   Hmm... can't be the area of the enclosed region. This is what we called the signed area (it kind of look like the area of the enclosed region but this is negative).     Signed Area   The signed area is the area above the -axis minus the area below the -axis. That is, we treat the area above the -axis as positive area and the area below the -axis as negative area.    It turns out that the definite integral computes the signed area of the region between the graph of and the -axis over the interval .   Find the value of , where the graph of is shown below:   The graph of       Observe that the region has three parts, two semi-circles and a triangle.  Do we know how to find their respective signed area ?    The first semi-circle occurs in the interval . Since the region is above the -axis, the integral equals to the area.   Next, there is a triangle in the interval . Observe that this region is below the -axis, the integral equals to the negative of the area.  Alternatively , you can see that the \"height\" of the triangle, using the function value, is .  The last region is another semi-circle in the interval . This region is above the -axis so the integral equals to its area.   Putting all these three pieces together, we obtain       Properties of Definite Integral  There are various properties of definite integrals. I will put these properties down and let's see if you can make sense of them. Feel free to use them as you see fit.   Properties of Definite Integrals   Let and be integrable over and is within . Then the following properties hold:    Sum Rule       Constant Multiple Rule       Zero Length Rule       Additivity for Adjacent Intervals       Reversing the Limits of Integration         We called the sum rule and the constant multiple rule combined as the linearity of definite integral.  Furthermore, we can summarize three more formulas to help us evaluate definite integral from the investigation tasks in the beginning of this section.                   With these formulas in our toolkit, we can actually evaluate some definite integrals without relying on the graph .   Evaluate the definite integral    Remember that we want to find the signed area of the function on the interval . This will be difficult to solve it geometrically or using Riemann sum. One of the reasons is because the function is too complicated...  So can we split up the definite integral into smaller pieces so we can tackle one piece at a time?         We will develop a lot of formulas (and a big theorem) to help us evaluate definite integrals. Make sure you keep a list of formulas so you have all the formulas in one sheet you can look up.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     The graph of is shown below. Evaluate each integral using this graph.  The graph of                                       Find the Rieman sum for , , and .      Evaluate the definite integral       Given that evaluate the following definite integrals.                                  Justify grapically, with pretty pictures and explanation that   If is a continuous odd function, then     If is a continuous even function, then         "
},
{
  "id": "sec52-DefiniteIntegral-2-1",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definite integral "
},
{
  "id": "sec52-DefiniteIntegral-2-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-2-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "  After this section, students will be able to:     understand the concept of Riemann sum, including the construction of rectangles using the given partition and sample points.    understand the concept of definite integrals, including each component of it and its meaning.    evaluate basic definite integrals using either geometry or basic formulas.    apply linearity and basic properties to break apart and evaluate definite integral.    "
},
{
  "id": "sec52-DefiniteIntegral-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-3",
  "type": "Investigation",
  "number": "5.2.1",
  "title": "",
  "body": "  Recall the big goal in is to compute the area under the curve. Let's see if we can come up with some basic formulas we can use directly.  Let and be positive real numbers such that . Find the area of the following function over the indicated interval.     over for any positive real number .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?   P.S.: It is fine if we can't match the shape up with a known geometric shape. Richard actually solved this problem in the previous section with some fancy symbol-pushing algebra.    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the highlighted region isn't a known geometric shape with an area formula. So we can't find the area geometrically...  Richard worked out the problem using in the previous section.  Feel free to expand to see what the answer is.    "
},
{
  "id": "subsec-521-RiemannSum-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann Sum "
},
{
  "id": "Construction_RiemannSum",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#Construction_RiemannSum",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": " Construction of   "
},
{
  "id": "subsec-521-RiemannSum-6",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-6",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": " Find the Riemann sum for the function , the partition and the choice of sample points    Let's graph the function first. The label each subinterval and locate the sample point in each of them. Based on this, you should be able to construct four rectangles.    Below is the diagram of the four rectangles:   Construction of for , with and .      From the diagram, we can determine the area of each rectangles.    1st rectangle : the width is and the height is .     2nd rectangle : the width is and the height is .     3rd rectangle : the width is and the height is .     4th rectangle : the width is and the height is .   Hence, the Riemann sum is   The Riemann sum of is an approximation of the area under the curve.   "
},
{
  "id": "subsec-521-RiemannSum-10",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-10",
  "type": "Figure",
  "number": "5.2.8",
  "title": "",
  "body": " Representative Rectangle with width of and the height of .     "
},
{
  "id": "subsec-521-RiemannSum-11",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definite integral "
},
{
  "id": "thm-DefiniteIntegral",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#thm-DefiniteIntegral",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "Definite Integral.",
  "body": " Definite Integral   The definite integral of over , denoted by the integral sign, is the limit of the Riemann sum When the limit exists, we say that is integrable over .   "
},
{
  "id": "subsec-521-RiemannSum-13",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrand differential limits of integration lower limit upper limit "
},
{
  "id": "subsec-522-SignedArea-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-3",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": " Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of .        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  You can imagine that the height of any representative rectangle is .  The combined width of all rectangles is .  Hence,   You can see that the definite integral represents the area of the enclosed region (how surprising... ).   "
},
{
  "id": "subsec-522-SignedArea-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-4",
  "type": "Example",
  "number": "5.2.12",
  "title": "",
  "body": " Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  But the issue here is that the function value is ... This can't be the height (since height, geometrically speaking, cannot be negative).  This is a place in math that we have to follow the definition if a conflict arise. Since the definition of the definite integral emphasizes the function value, we will need to use in our computation.  Similarly, the width of all rectangles is .  Hence,   Hmm... can't be the area of the enclosed region. This is what we called the signed area (it kind of look like the area of the enclosed region but this is negative).   "
},
{
  "id": "def-SignedArea",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#def-SignedArea",
  "type": "Definition",
  "number": "5.2.14",
  "title": "Signed Area.",
  "body": " Signed Area   The signed area is the area above the -axis minus the area below the -axis. That is, we treat the area above the -axis as positive area and the area below the -axis as negative area.   "
},
{
  "id": "subsec-522-SignedArea-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-7",
  "type": "Example",
  "number": "5.2.15",
  "title": "",
  "body": " Find the value of , where the graph of is shown below:   The graph of       Observe that the region has three parts, two semi-circles and a triangle.  Do we know how to find their respective signed area ?    The first semi-circle occurs in the interval . Since the region is above the -axis, the integral equals to the area.   Next, there is a triangle in the interval . Observe that this region is below the -axis, the integral equals to the negative of the area.  Alternatively , you can see that the \"height\" of the triangle, using the function value, is .  The last region is another semi-circle in the interval . This region is above the -axis so the integral equals to its area.   Putting all these three pieces together, we obtain    "
},
{
  "id": "thm-Property_DefiniteIntegral",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#thm-Property_DefiniteIntegral",
  "type": "Theorem",
  "number": "5.2.17",
  "title": "Properties of Definite Integrals.",
  "body": " Properties of Definite Integrals   Let and be integrable over and is within . Then the following properties hold:    Sum Rule       Constant Multiple Rule       Zero Length Rule       Additivity for Adjacent Intervals       Reversing the Limits of Integration        "
},
{
  "id": "subsec-523-Properties_DefiniteIntegral-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-523-Properties_DefiniteIntegral-7",
  "type": "Example",
  "number": "5.2.18",
  "title": "",
  "body": " Evaluate the definite integral    Remember that we want to find the signed area of the function on the interval . This will be difficult to solve it geometrically or using Riemann sum. One of the reasons is because the function is too complicated...  So can we split up the definite integral into smaller pieces so we can tackle one piece at a time?        "
},
{
  "id": "ws-sec52-3-1-1-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-1-1-2",
  "type": "Figure",
  "number": "5.2.19",
  "title": "",
  "body": " The graph of     "
},
{
  "id": "ws-sec52-3-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-4",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the Rieman sum for , , and .   "
},
{
  "id": "ws-sec52-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-5",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Evaluate the definite integral    "
},
{
  "id": "ws-sec52-6-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-5",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-7",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "  Justify grapically, with pretty pictures and explanation that   If is a continuous odd function, then     If is a continuous even function, then       "
},
{
  "id": "sec53-IndefiniteIntegral",
  "level": "1",
  "url": "sec53-IndefiniteIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Indefinite Integral",
  "body": " The Indefinite Integral   In this section, you will learn a concept called \"antiderivative\".    After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.        Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.      What function will give a derivative of ?   Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?     We can consider taking the derivative as an operation we can perform on a function. A natural question to wonder is whether we can undo this operation (that is, we know the derivative of a function and we want to find the original function by undoing the derivative). We actually can and this is the main concept we will explore in this section.   Antiderivatives and Indefinite Integrals  Let's define the term antiderivative first (it might be self-explanatory...).    A function is an antiderivative of on an open interval if for all in .    In other words, antiderivative \"undoes\" derivative. Let be a function and be its antiderivative, then its relation is captured in the following diagram:   Relationship between Derivative and Anti-derivative.       Find an antiderivative of the function    What we are tasked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...     Observe that the antiderivative of a function is NOT unique. We are free to change the constant term of the antiderivative and the function is still an antiderivative (because the derivative of a constant is zero, so changing the constant term of a function doesn't affect its derivative).  Symbolically speaking, if is an antiderivative of (which means ), then is also an antiderivative of . Let's make it a nice theorem.    Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .    What this theorem tells us is that all the antiderivatives of a function should only differ by a constant . If we can't determine what this constant is, then we will need to put a to suggest the existence of such a constant.  The argument of this theorem relies on the fact that the derivative of a constant is (so adding a constant to a function doesn't change its derivative). I also include a formal proof of this theorem below (formal as in the argument is more rigorous) if you wonder about how to prove this theorem.   Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!   Recall we have multiple notations back in calculus 1 to denote the concept of derivatives. Of course we will also need a notation to denote the concept of the (general) antiderivatives. We will be using indefinite integral to denote the general antiderivative of a function as follows:    The notation means that . We say that is the general antiderivative or the indefinite integral of .    Now we can capture the relationship between derivatives and anti-derivatives using indefinite integrals.   Relationship between Derivative and Anti-derivative.       But Richard... Isn't integral some sort of area under the curve? Why on earth are we using the same(ish) notation to represent the general antiderivative?  Well we will not be able to answer this question in this section. What we can do in this section is to forget about the area and interpret indefinite integrals as some general antiderivatives.   Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence     Guess-and-check-ing isn't the most efficient method. Just like we have a lot of formulas to help us take the derivative of a function, it will be so nice if we have some formulas to help us find the indefinite integral (aka the general antiderivative) of a function.    Some (basic) Indefinite Integral Formulas  Recall the indefinite integral (aka the general antiderivative) undoes the derivative, which means we can come up with some indefinite integral formulas by rewriting the derivative formulas (along with some basic manipulations).  A famous property you used a lot when taking the derivative is the linearity (meaning you can split up the addition\/subtraction and take out the scalar multiple). This property also holds for integrals.   Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant        We will next look at the power rule since this is the mostly commonly used rule back in calculus 1.   Power Rule for Integrals     for .    Recall the power rule for derivatives works like this:    Multiply the power function by the exponent, and then     Subtract one from the exponent.   Since the indefinite integral undoes the derivative, then you can imagine we will need to undo the multiplication (by division) and the subtraction (by addition). But here is a small catch - when undoing the power rule for derivatives, not only we need to undo each of the step, but also the order of the steps . That is, the power rule for integrals should work like this:    Add one to the exponent, and then     Divide the power function by the exponent.      Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!    Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.    Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The solution below is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .    A big assumption in the power rule is that the power itself cannot be (this should be clear). The what should we do when the power is ?  We have another formula to deal with this special case. Recall we learned the following derivative formula back in calculus 1: If we rewrite this formula (with a bit of an adjustment to take care of a domain issue), then we can obtain a formula to find the indefinite integral of !   Antiderivative of         Now that we have two formulas to find the indefinite integral of a power function, depending on their power. Make sure you pay extra attention to which formula to use when the power function has a power of .   Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:      Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!     You may get an idea by now that simplifying the integrand is a good first step to evaluate an indefinite integral. That is, you want to distribute as much as you can and split up the terms of the integrand, guaranteed by the linearity, and integrate each term separately.  We also learned about the derivative of the six trigonometric functions. Of course we can rewrite them to obtain the following batch of the integral formulas.   Basic Trigonometric Integrals           But Richard... some of the integrands seem complicated in the formulas above. How do I know when I need to use these formula?  The short answer is that... you don't really know when you encounter a problem... While the integral formula for sine and cosine are really common and widely used, you will need to pay special attention to when you obtain the integrand in those special forms. So having those formulas handy is a great idea and you can always check in to see if these formulas will be useful for a problem.   Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain     Later in the term, we will develop more strategies to integrate trigonometric integrals (mainly in section 7.2) so stay tuned!  There are two more integral formulas in this section, which are the integral formulas involving .   Integrals Involving           Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain     We will be developing more and more integral formulas throughout the term. It is a good strategy to organize all the formulas in an integral formula sheet since you will be using some of the formulas again and again and again and again in this class.    Differential Equations and IVP  We know what an equation is. We dealt with equations where two sides of the equal sign are quantities (or numbers). We will briefly discuss differential equations , a type of equation that involves an unknown function and its first or higher derivatives. As you can imagine, the solution is, instead of number(s), function(s).   Solve the differential equation .   While there are a lot of the letters in this equation, the true variable is , as a function of . So what does the stands for and how can we undo it?    What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.     Your solution, if you play your cards right, is not unique. That is, your solution is NOT one single function. This is because we only found the indefinite integral of the right-hand side of the equation, which will result in an arbitrary constant, . But there is no way in the above example for us to figure out what this is... All we knew here is that is a mysterious constant here...  It would be great if we were told one more information that we can used to find this mysterious constant ...   Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .    The above example is called an Initial Value Problem (or IVP for short). The initial condition, for some fixed values of and , allows us to obtain a particular solution to the equation rather than a general solution.  We will finish this section by deriving the formula of the projectile motion as an investigation.    Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in section 5.6.    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?    Since represents the height of the object, its second derivative represents the acceleration , which is always on earth.  Also, we consider going downwards the negative direction vertically, so tells us that the acceleration of the object is going downwards.     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   Observe that the differential equation contains the second derivative, which is obtained by taking the derivative of a function twice in a row.  The solution should be the original function before taking the derivative, which is here. So what operation will undo the derivative and how many times we should apply this operation to cancel the second derivative?    The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that        Something to ponder on...  There are actually two unanswered questions in this section, and they are   Why can we denote the general antiderivative using indefinite integrals? Isn't the concept of integral about some sort of area under the curve?    How are indefinite integrals (aka general antiderivative) related to definite integrals (aka signed area). Or are they even related?   These are both very good questions to ponder on! This is one of the reasons why calculus symbols are confusing, that the integral notation ( ) is being used to denote two different concepts here. You will find the answer to the first question in Section 5.5 and the answer to the second question in Section 5.4.   P.S.: Yes we will cover Section 5.5 first and then Section 5.4.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.      Verify the following indefinite integrals by differentiation.   P.S.: You will learn how to evaluate these integrals in later chapters\/sections.                                  Evaluate the following indefinite integral.                                                              Solve the following IVP.      given that and        given that and       "
},
{
  "id": "sec53-IndefiniteIntegral-2-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-2-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "  After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.    "
},
{
  "id": "sec53-IndefiniteIntegral-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-3",
  "type": "Investigation",
  "number": "5.3.1",
  "title": "",
  "body": "  Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.      What function will give a derivative of ?   Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?    "
},
{
  "id": "def-Antiderivatives",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#def-Antiderivatives",
  "type": "Definition",
  "number": "5.3.2",
  "title": "",
  "body": "  A function is an antiderivative of on an open interval if for all in .   "
},
{
  "id": "fig-Derivative-to-Antiderivative",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#fig-Derivative-to-Antiderivative",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": " Relationship between Derivative and Anti-derivative.     "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": " Find an antiderivative of the function    What we are tasked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...    "
},
{
  "id": "thm-GeneralAntiderivative",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-GeneralAntiderivative",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": "  Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .   "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.5.",
  "body": " Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!  "
},
{
  "id": "def-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#def-IndefiniteIntegrals",
  "type": "Definition",
  "number": "5.3.6",
  "title": "",
  "body": "  The notation means that . We say that is the general antiderivative or the indefinite integral of .   "
},
{
  "id": "fig-Derivative-Antiderivative-cycle",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#fig-Derivative-Antiderivative-cycle",
  "type": "Figure",
  "number": "5.3.7",
  "title": "",
  "body": " Relationship between Derivative and Anti-derivative.     "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-19",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-19",
  "type": "Example",
  "number": "5.3.8",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence    "
},
{
  "id": "thm-Linearity-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Linearity-IndefiniteIntegrals",
  "type": "Theorem",
  "number": "5.3.9",
  "title": "Linearity of the Indefinite Integrals.",
  "body": " Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant       "
},
{
  "id": "thm-PowerRule-Integrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-PowerRule-Integrals",
  "type": "Theorem",
  "number": "5.3.10",
  "title": "Power Rule for Integrals.",
  "body": " Power Rule for Integrals     for .   "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.10.",
  "body": " Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!  "
},
{
  "id": "note-findingVSverifying",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#note-findingVSverifying",
  "type": "Note",
  "number": "5.3.11",
  "title": "Finding\/Evaluating versus Verifying.",
  "body": " Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.  "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "type": "Example",
  "number": "5.3.12",
  "title": "",
  "body": " Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The solution below is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .   "
},
{
  "id": "thm-Antiderivative-Reciprocal",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Antiderivative-Reciprocal",
  "type": "Theorem",
  "number": "5.3.13",
  "title": "Antiderivative of <span class=\"process-math\">\\(\\boldsymbol{y = \\dfrac{1}{x}}\\)<\/span>.",
  "body": " Antiderivative of        "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-15",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-15",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": " Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:    "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-16",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-16",
  "type": "Example",
  "number": "5.3.15",
  "title": "",
  "body": " Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!    "
},
{
  "id": "thm-BasicTrigIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-BasicTrigIntegrals",
  "type": "Theorem",
  "number": "5.3.16",
  "title": "Basic Trigonometric Integrals.",
  "body": " Basic Trigonometric Integrals         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-22",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-22",
  "type": "Example",
  "number": "5.3.17",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain    "
},
{
  "id": "thm-IntegralInvolvingExponential",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-IntegralInvolvingExponential",
  "type": "Theorem",
  "number": "5.3.18",
  "title": "Integrals Involving <span class=\"process-math\">\\(\\boldsymbol{e^x}\\)<\/span>.",
  "body": " Integrals Involving         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-26",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-26",
  "type": "Example",
  "number": "5.3.19",
  "title": "",
  "body": " Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain    "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-3",
  "type": "Example",
  "number": "5.3.20",
  "title": "",
  "body": " Solve the differential equation .   While there are a lot of the letters in this equation, the true variable is , as a function of . So what does the stands for and how can we undo it?    What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.    "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-6",
  "type": "Example",
  "number": "5.3.21",
  "title": "",
  "body": " Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .   "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-9",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-9",
  "type": "Investigation",
  "number": "5.3.22",
  "title": "",
  "body": "  Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in section 5.6.    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?    Since represents the height of the object, its second derivative represents the acceleration , which is always on earth.  Also, we consider going downwards the negative direction vertically, so tells us that the acceleration of the object is going downwards.     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   Observe that the differential equation contains the second derivative, which is obtained by taking the derivative of a function twice in a row.  The solution should be the original function before taking the derivative, which is here. So what operation will undo the derivative and how many times we should apply this operation to cancel the second derivative?    The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that     "
},
{
  "id": "ws-sec53-3-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-4",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-5",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-4",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-4",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-5",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-5",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-6",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-7",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-7",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-8",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-8",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-9",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-9",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-5-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-5-2",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": "   given that and    "
},
{
  "id": "ws-sec53-5-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-5-3",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": "   given that and    "
},
{
  "id": "sec54-FTCpartI",
  "level": "1",
  "url": "sec54-FTCpartI.html",
  "type": "Section",
  "number": "5.4",
  "title": "The Fundamental Theorem of Calculus, Part I",
  "body": " The Fundamental Theorem of Calculus, Part I   In this section, we will investigate the Fundamental Theorem of Calculus (FTC), part I, which states that we could evaluate the definite integral (aka the signed area under the curve) using indefinite integral (aka the general antiderivative).    After this section, students will be able to:     state and explain the Fundamental Theorem of Calculus, part I.    evaluate definite integrals using FTC.    evaluate definite integrals of piecewise functions using FTC.       P.S.: We will cover before this section. Some of the results in this section will be built upon the concepts covered in .   A Corollary of the Fundamental Theorem of Calculus  Well the Fundamental Theorem of Calculus, Part II, in , isn't the theorem we use a lot. Instead, we use the Fundamental Theorem of Calculus, Part I, a lot to help us evaluate definite integrals. This is actually a (most useful) corollary of the Fundamental Theorem of Calculus. The theorem is presented in your textbook page 318. I also included it below:    Assume that and that is continuous on . If is an antiderivative of on , then      Corollary , in math, means a result that follows immediately from a big theorem. So we should be able to prove this theorem quickly if we know how the Fundamental Theorem of Calculus works.  Let be a continuous function. By the Fundamental Theorem of Calculus, we know that its accumulation function, , is an antiderivative of (since ). Furthermore, we know that ALL antiderivatives of a function should only differ by a constant. That is, if is an arbitrary antiderivative of , then .  We will prove this corollary through the accumulation function. Your textbook approaches the proof using the Mean Value Theorem, which is a different approach. Feel free to read through it if you want a different perspective of why this corollary is true.  Let's define the accumulation function The reason why we used as the lower limit here is because is taken for something else. In math, we don't want to label two different thing using the same letter to avoid confusion. I, again, coded a pretty picture to help you visualize the situation.       Using colors, we know that represents the area of the region on , which is the area of the green and orange regions combined. represents the area of the region on , which is the area of the green region.  We know that represents the area of the region on , which is the area of the orange region. A simple subtraction tells us that This result is super close to the corollary already!  Recall . Then we obtain We proved another big result in calculus!  The last step in our proof is another reason why we don't need a when evaluating definite integral. The will be canceled!    Why is this corollary important?  Note that the definite integrals allow us to compute the area under the curve. But finding the Riemann sum is a painful process, especially without the help of the technology.  Whereas we can find the indefinite integral (or the general antiderivative) of a function. But it has nothing to do with the area.  This corollary gives us a practical way to connect these two ideas together! We can evaluate the definite integral by (1) find the antiderivative of the integrand, and (2) plug in the limits of integration and do the subtraction. In fact, some textbooks call this result the evaluation theorem to emphasize the fact that we can evaluate definite integral using this result.  In notation, we have We will be using this idea to evaluate the definite integrals mostly in this class.    Examples on Applying FTC Corollary  We will work through many examples to evaluate definite integrals using the corollary of FTC. Make sure you are comfortable with this way of evaluating definite integrals!  In the following examples, I will show all the steps. Make sure you understand why each step is being done (either using properties of definite integral, FTC, purely algebra, or purely arithmetic).   Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?          Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?          Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?          Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?          What if I forgot the ... Is it a big deal?  Observe that the didn't contribute to the work at all... Is it okay to drop the ?  The short answer is no... Dropping the will make the answer (ish...).  Remember the definite integral is defined using the limit of Riemann sum, where the is the infinitesimally small width of the rectangles. Without multiplying the with the function value (aka the height of the rectangle), we don't get the area of the rectangles out of it. We would be just adding up infinite number of function values together, resulting in .  Make sure you have the in all the definite integrals to make sure you are indeed finding the area under the curve, rather than simply adding all the functions values together.   Now that we have an idea on how to evaluate definite integrals with the integrand being a single-piece functions. What about evaluating definite integrals with the integrand being a piecewise function? Let's try two of them!   Evaluate the definite integral , where    Observe that we have a different function formulas before hits and after hits . So we don't know which formula to use to represent the function on the entire interval of .  It would be so nice if we could split up the region at this transition point of so we can use the first formula on and the second formula on ... Is there a property of definite integral that will allow us to split up the definite integral?    One of the properties of definite integral allows us to split up the definite integrals at as follows: Ha! We know that on the interval and on the interval ! Then we can plug in the corresponding function formulas and let FTC to do the rest of the work!      Evaluate the definite integral    What makes this problem difficult is the absolute value... We don't have any integral formula to help us find the antiderivative of the absolute value function.  It would be so nice if there is a way to remove the absolute value...  There is actually a way to do so! Remember absolute value function is essentially a piecewise function as follows: In other words, the absolute value turns all the negative values to positive.  So do we know where, within , the sine function takes on negative value?    Recall that the value of the sine function is positive on and negative on (if this fact doesn't click instantly, graphing out the sine function on and observe the graph). Then we can remove the absolute value by rewriting the integrand as a piecewise function as follows: Then we can split up the integral at this transition point of and plug in the corresponding function formulas. The FTC will do the rest!     Again, make sure you are comfortable with evaluating definite integrals in this way. We will be developing more and more fancy methods to evaluate definite integrals using FTC. A good basic understanding and fluency in this way will make the later sections easier!  There is a saying \"practice makes perfect\". A good way of practicing the FTC is to go back to all the examples we did and see if you can solve them without looking at my solution. I will also include some practice problems at the end you can work on.    Something to ponder on...  Notice that the FTC, part I, has an assumption that says is continuous on some closed interval . Later in the class (likely towards the end of chapter 7), Richard will make a BIG deal of this assumption (so he is cool if you don't pay attention to it now). But why is this assumption necessary?  To give you an actual problem to think about, is it correct to evaluate the integral as follows? We will revisit this problem in section 7.7 and point out what's wrong with this line of work.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following definite integrals using the FTC.                                                              Evaluate the definite integral where       Rewrite the definite integral as a sum of integrals without the absolute value and evaluate it.                   "
},
{
  "id": "sec54-FTCpartI-2-2",
  "level": "2",
  "url": "sec54-FTCpartI.html#sec54-FTCpartI-2-2",
  "type": "Objectives",
  "number": "5.4",
  "title": "",
  "body": "  After this section, students will be able to:     state and explain the Fundamental Theorem of Calculus, part I.    evaluate definite integrals using FTC.    evaluate definite integrals of piecewise functions using FTC.    "
},
{
  "id": "cor-FTC",
  "level": "2",
  "url": "sec54-FTCpartI.html#cor-FTC",
  "type": "Corollary",
  "number": "5.4.1",
  "title": "",
  "body": "  Assume that and that is continuous on . If is an antiderivative of on , then    "
},
{
  "id": "subsec-541-FTC-Corollary-4",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-541-FTC-Corollary-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Corollary "
},
{
  "id": "fig-Proof-FTC-Cor",
  "level": "2",
  "url": "sec54-FTCpartI.html#fig-Proof-FTC-Cor",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-4",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-4",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": " Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?        "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-5",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-5",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": " Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?        "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-6",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-6",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": " Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?        "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-7",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-7",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": " Evaluate the definite integral    By the FTC, we will need to first find an antiderivative of the integrand, and then plug in the limits of integration and do the subtraction.  So what is an antiderivative of the integrand ?        "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-8",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-8",
  "type": "Note",
  "number": "5.4.7",
  "title": "What if I forgot the <span class=\"process-math\">\\(\\boldsymbol{dx}\\text{...}\\)<\/span> Is it a big deal?",
  "body": " What if I forgot the ... Is it a big deal?  Observe that the didn't contribute to the work at all... Is it okay to drop the ?  The short answer is no... Dropping the will make the answer (ish...).  Remember the definite integral is defined using the limit of Riemann sum, where the is the infinitesimally small width of the rectangles. Without multiplying the with the function value (aka the height of the rectangle), we don't get the area of the rectangles out of it. We would be just adding up infinite number of function values together, resulting in .  Make sure you have the in all the definite integrals to make sure you are indeed finding the area under the curve, rather than simply adding all the functions values together.  "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-10",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-10",
  "type": "Example",
  "number": "5.4.8",
  "title": "",
  "body": " Evaluate the definite integral , where    Observe that we have a different function formulas before hits and after hits . So we don't know which formula to use to represent the function on the entire interval of .  It would be so nice if we could split up the region at this transition point of so we can use the first formula on and the second formula on ... Is there a property of definite integral that will allow us to split up the definite integral?    One of the properties of definite integral allows us to split up the definite integrals at as follows: Ha! We know that on the interval and on the interval ! Then we can plug in the corresponding function formulas and let FTC to do the rest of the work!    "
},
{
  "id": "subsec-543-Examples-FTC-Corollary-11",
  "level": "2",
  "url": "sec54-FTCpartI.html#subsec-543-Examples-FTC-Corollary-11",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": " Evaluate the definite integral    What makes this problem difficult is the absolute value... We don't have any integral formula to help us find the antiderivative of the absolute value function.  It would be so nice if there is a way to remove the absolute value...  There is actually a way to do so! Remember absolute value function is essentially a piecewise function as follows: In other words, the absolute value turns all the negative values to positive.  So do we know where, within , the sine function takes on negative value?    Recall that the value of the sine function is positive on and negative on (if this fact doesn't click instantly, graphing out the sine function on and observe the graph). Then we can remove the absolute value by rewriting the integrand as a piecewise function as follows: Then we can split up the integral at this transition point of and plug in the corresponding function formulas. The FTC will do the rest!    "
},
{
  "id": "ws-sec54-3-2",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-3",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-4",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-5",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-6",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-7",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-8",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-3-9",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-3-9",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-4",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Evaluate the definite integral where    "
},
{
  "id": "ws-sec54-5-2",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-5-2",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec54-5-3",
  "level": "2",
  "url": "sec54-FTCpartI.html#ws-sec54-5-3",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "      "
},
{
  "id": "sec55-FTCpartII",
  "level": "1",
  "url": "sec55-FTCpartII.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Fundamental Theorem of Calculus, Part II",
  "body": " The Fundamental Theorem of Calculus, Part II   In this section, we will learn the Fundamental Theorem of Calculus (FTC), part II, which states that integration and differentiation are inverse process (so they cancel each other).    After this section, students will be able to:     understand the concept of accumulation function.    understand the Fundamental Theorem of Calculus, part II and apply it to relevant problems.    analyze the graph of the accumulation function.       P.S.: We will cover this section before . Some of the results in will be built upon the concepts covered in this section.   Accumulation Functions  Let's first define what the accumulation function is!    Let be a continuous function on an open interval and let be in . We define the accumulation function as     Using our knowledge of function notation, we know that the name of the accumulation function is , with the input of and the output of .  This function takes in a complicated formula, so let's work on an example to see what it does!   Let and . Then we can define the accumulation function here to be Find the value of , , , and . Then graph the function and indicate what these values represent on the graph.   Let's plug in the values to the function. Then the output is some sort of definite integral.  Recall definite integral represents some sort of signed area of the region under the curve. Can we find the (signed) area of the region under the curve geometrically?    Below is the graph of .   The Graph of       represents the area under the line from to . Graphically speaking, the area is 0, shown in the diagram below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of        Notice that the variable appears to be in the place of the upper limit of integration in the integral. This implies that the input of the accumulation function, , represents the upper limit of integration . It tells us how \"far\" we are integrating from the starting point of .  The outout of the accumulation function, , represents the signed area under the curve of from to .  We call the accumulation function because it accumulates the signed area under the curve as we move from the starting point of to some later point . Your textbook actually call it the area function but this idea of area can be generalized. The accumulation function accumulates some quantity (and it doesn't have to be some area) between two points.   Why are there two variables in the function...  Notice that there are two variables in the accumulation function, and . Why do we need both the and the to define the accumulation function...  Well long story short, these two variables are doing two different jobs since there are two types of functions here:    is the input variable of the accumulation function, which represents the upper limit of integration of the integral.     is what we called the dummy variable we use to represent the input of the function .     Then the next natural question to ask here is why wouldn't it make sense to use ONLY one variable to do both jobs (like only using as the variable)? Wouldn't it make the function easier?  Well we can do a quick experiment to see if it works to use only as the variable in the accumulation function. Let's define the accumulation function like this: Let's say we want to evaluate , then we will need to replace ALL the 's with . Then we obtain   Wel... is a constant (the output of the function with an input of ), so we are really integrating a number here (boring). Also, what is ... Well we know that the symbol here represents the infinitesimally small amount of change. But is a constant and the value of will never change... So doesn't really make sense mathematically...   Now that we know what the accumulation function is, we can investigate the Fundamental Theorem of Calculus in the next section! As the name of the theorem suggested, this theorem is really fundamental in the study of calculus.    THE Fundamental Theorem of Calculus  It turns out that THE fundamental theorem of calculus says the integration and differentiation are inverse processes. That is, they will cancel each other. This relation (at least half of it) is captured in the Fundamental Theorem of Calculus, Part II, in your textbook page 326. I also included it below:   The Fundamental Theorem of Calculus   Let be a continuous function on an open interval and let be in . Then the definite integral of from to , aka the accumulation function, is an antiderivative of on . That is, Equivalently,     You may be wondering why differentiation will cancel the integration. Well your textbook provided a technical proof in this section using the fancy Squeeze Theorem. We will come up with the (same-ish) argument but in a more intuitive sense.  Observe that we need to take the derivative of the accumulation function. Then using the definition of derivative (the one with the limits), we obtain   Hmm let's simplify the average rate of change of the accumulation function from to first (the fraction without the limit). I made a pretty picture below to help you visualize the situation.   Average Rate of Change of      In this pretty picture, observe that    represents the area on , which is the area of the green and the orange regions combined.     represents the area on , which is the area of the green region.   This implies that should give us the area on , which is the area of the orange region. Hence, we know that the average rate of change is the area of the orange region over .  To obtain the derivative, aka the instantaneous rate of change , we want to be a super very really small number, so the orange region should be a super skinny region whose area can be approximated using one skinny rectangle strip.  We learned about approximating the area using rectangles in ! The two easier approximation methods are the left-endpoint approximation and the right endpoint approximation. Then which method should we use to approximate the area of the orange region?  It turns out that it doesn't matter (because of the Squeeze theorem... if you want a more rigorous argument, ask Richard or read the proof in the textbook). For demonstration purposes, let's use the right-endpoint approximation to approximate the area of the orange region. Then the height of the skinny rectangle strip is . So we know   Putting all these pieces to the definition of the derivative (the one with the limit), we obtain Ha! We did it! We proved the Fundamental Theorem of Calculus!    To apply the FTC...  To apply the Fundamental Theorem of Calculus, make sure the format of the question will match the left-hand side of the equation in the theorem. Let's start with the easy ones where we can simply apply the Fundamental Theorem of Calculus without any slick tricks!   Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? If so, then what does the Fundamental Theorem of Calculus tell us?    Observe that format matches up perfectly! So we are taking the derivative of the accumulation function with . By the Fundamental Theorem of Calculus, we obtain      Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? If not, how can we manipulate the definite integral to make it match up with the equation?    Observe that the expression doesn't quite match up... We want the variable of the accumulation function to be on the upper limit and the number to be on the lower limit. It would be so nice if there is a way for us to reverse the upper and the lower limits...  There is actually a way to do so! Richard came to our rescue and direct us to the !  By a property of definite integral, we obtain Ha! we can now calculate the derivative using the Fundamental Theorem of Calculus!     Let's kick things up a notch and see how the Fundamental Theorem of Theorem can be applied to more tricky problems.   Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? What seems to be the mismatch?  A good advice is to find out what the accumulation function is in this case...    The integrand is . Then we can define its accumulation function to be Well we are not really tasked to take the derivative of , but more like ... This is a composite function with the outside function of and inside function of . Do we know how to take the derivative of a composite function?  We do! We can take the derivative of a composite function using the chain rule back in calculus 1! By the chain rule, we know that   The last question to resolve here is about the derivative of the accumulation function. By the Fundamental Theorem of Calculus, .  Putting these two pieces together, we obtain     Now we know how to deal with the case where one of the limits of integration contains a variable. What about the case where both the limits of integration contain a variable? Let's look at an example of this.   Calculate the following derivative    Obviously, we can't use the Fundamental Theorem of Calculus directly since the lower limit of this integral is not a constant.  Dealing with non-constant upper and lower limits are kind of a lot at once... It would be so nice if there is a property of definite integral that allows us to split the integral into two pieces, so we can deal with one of the non-constant limit of integration at a time...    We can actually split the integral into two pieces by one of the properties in . where is a constant within the domain of .  Ha! We know how to deal with the two pieces of the integrals! We will need the chain rule for both pieces of the integrals!  Let's again define the accumulation function to be Then we obtain     Observe that the two tricks that we are using are:   Properties of definite integral to split up the integral AND put the non-constant part to the upper limit; and    Chain rule to find the derivative.   In fact, we can generalize this to obtain a fancy formula we can use to solve similar problems once and for all!           The Graph of the Accumulation Function  We investigated the accumulation function earlier in this section. Recall the accumulation function takes the input of the upper limit of the definite integral and spits out the output of the area under the curve. We are now investigating the graph of the accumulation function.  One characteristics of a graph, as you learned back in calculus 1, are the local extrema (peaks and valleys on the graph). Can we predict where the peaks and valleys of the accumulation function are at given a graph of a function?   Let be the accumulation function defined as where is a function whose graph is shown below.   The graph of         Determine the intervals on which the accumulation function, is increasing (and decreasing)    Determine the value of where the accumulation function, , has a peak (and valley).      Recall that the accumulation function accumulates the signed area under the curve starting from . The region above the -axis should have a positive signed area and the region below the -axis should have a negative signed area.  So do we know at which point(s) we starts accumulating positive area (which makes the overall area greater) and negative area (which makes the overall area smaller)?    Observe that the enclosed region is above the -axis on and . This implies that we are accumulating positive area in these two regions, making the value of the accumulation function increasing.  Similarly, the region on is below the -axis, so we are accumulating negative area in this region, making the value of the accumulation function decreasing.  Hence, is increasing in the interval and decreasing in the interval .  Now let's think about the peaks and valleys. At the point of , we start to accumulate negative area, which makes the overall area smaller. This implies that there is a peak at .  Similarly, at the point of , we start to accumulate positive area, which makes the overall area greater. This implies that there is a valley at .    The above example shows an intuitive sense of reasoning about the graph of the accumulation function by imagining how the overall area is changing.  If you want to be fancier, recall the accumulation function, , is an antiderivative of the function , guaranteed by FTC. We can reverse-engineer the first derivative test you learned back in calculus 1. That is, the critical points (in this problem, peaks and valley) of the accumulation function will occur at the point where the derivative of the accumulation function, aka is . The accumulation function is increasing if its derivative, aka , is positive, and decreasing if its derivative, , is negative.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Calculate the following derivative.                                  Prove the formula    Note: By saying \"prove\", Richard means to justify this formula informally. The goal here is to make sure you know how the formula is derived and why each component is necessary. Richard will never look for a technical mathematical proof in this class, but you are certainly more than welcome to try coming up with a proof-y proof and Richard is always happy to chat about it.      Let be the accumulation function defined as Below is the graph of on .   The graph of         Determine the intervals on which the accumulation function, is increasing (and decreasing)    Determine the value of where the accumulation function, , has a peak (and valley).        "
},
{
  "id": "sec55-FTCpartII-2-2",
  "level": "2",
  "url": "sec55-FTCpartII.html#sec55-FTCpartII-2-2",
  "type": "Objectives",
  "number": "5.5",
  "title": "",
  "body": "  After this section, students will be able to:     understand the concept of accumulation function.    understand the Fundamental Theorem of Calculus, part II and apply it to relevant problems.    analyze the graph of the accumulation function.    "
},
{
  "id": "def-AccumulationFunction",
  "level": "2",
  "url": "sec55-FTCpartII.html#def-AccumulationFunction",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": "  Let be a continuous function on an open interval and let be in . We define the accumulation function as    "
},
{
  "id": "subsec-551-AccumulationFunction-6",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-551-AccumulationFunction-6",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": " Let and . Then we can define the accumulation function here to be Find the value of , , , and . Then graph the function and indicate what these values represent on the graph.   Let's plug in the values to the function. Then the output is some sort of definite integral.  Recall definite integral represents some sort of signed area of the region under the curve. Can we find the (signed) area of the region under the curve geometrically?    Below is the graph of .   The Graph of       represents the area under the line from to . Graphically speaking, the area is 0, shown in the diagram below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       represents the area under the line from to . Graphically speaking, the enclosed region is a trapezoid, with the area of The diagram is shown below.   The Diagram of       "
},
{
  "id": "subsec-551-AccumulationFunction-10",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-551-AccumulationFunction-10",
  "type": "Note",
  "number": "5.5.8",
  "title": "Why are there two variables in the function....",
  "body": " Why are there two variables in the function...  Notice that there are two variables in the accumulation function, and . Why do we need both the and the to define the accumulation function...  Well long story short, these two variables are doing two different jobs since there are two types of functions here:    is the input variable of the accumulation function, which represents the upper limit of integration of the integral.     is what we called the dummy variable we use to represent the input of the function .     Then the next natural question to ask here is why wouldn't it make sense to use ONLY one variable to do both jobs (like only using as the variable)? Wouldn't it make the function easier?  Well we can do a quick experiment to see if it works to use only as the variable in the accumulation function. Let's define the accumulation function like this: Let's say we want to evaluate , then we will need to replace ALL the 's with . Then we obtain   Wel... is a constant (the output of the function with an input of ), so we are really integrating a number here (boring). Also, what is ... Well we know that the symbol here represents the infinitesimally small amount of change. But is a constant and the value of will never change... So doesn't really make sense mathematically...  "
},
{
  "id": "thm-FTC",
  "level": "2",
  "url": "sec55-FTCpartII.html#thm-FTC",
  "type": "Theorem",
  "number": "5.5.9",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus   Let be a continuous function on an open interval and let be in . Then the definite integral of from to , aka the accumulation function, is an antiderivative of on . That is, Equivalently,    "
},
{
  "id": "fig-Proof-FTC",
  "level": "2",
  "url": "sec55-FTCpartII.html#fig-Proof-FTC",
  "type": "Figure",
  "number": "5.5.10",
  "title": "",
  "body": " Average Rate of Change of     "
},
{
  "id": "subsec-553-UsingFTC-3",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-553-UsingFTC-3",
  "type": "Example",
  "number": "5.5.11",
  "title": "",
  "body": " Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? If so, then what does the Fundamental Theorem of Calculus tell us?    Observe that format matches up perfectly! So we are taking the derivative of the accumulation function with . By the Fundamental Theorem of Calculus, we obtain    "
},
{
  "id": "subsec-553-UsingFTC-4",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-553-UsingFTC-4",
  "type": "Example",
  "number": "5.5.12",
  "title": "",
  "body": " Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? If not, how can we manipulate the definite integral to make it match up with the equation?    Observe that the expression doesn't quite match up... We want the variable of the accumulation function to be on the upper limit and the number to be on the lower limit. It would be so nice if there is a way for us to reverse the upper and the lower limits...  There is actually a way to do so! Richard came to our rescue and direct us to the !  By a property of definite integral, we obtain Ha! we can now calculate the derivative using the Fundamental Theorem of Calculus!    "
},
{
  "id": "subsec-553-UsingFTC-6",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-553-UsingFTC-6",
  "type": "Example",
  "number": "5.5.13",
  "title": "",
  "body": " Calculate the following derivative    Does the expression match up with the left-hand side of the equation in the Fundamental Theorem of Calculus? What seems to be the mismatch?  A good advice is to find out what the accumulation function is in this case...    The integrand is . Then we can define its accumulation function to be Well we are not really tasked to take the derivative of , but more like ... This is a composite function with the outside function of and inside function of . Do we know how to take the derivative of a composite function?  We do! We can take the derivative of a composite function using the chain rule back in calculus 1! By the chain rule, we know that   The last question to resolve here is about the derivative of the accumulation function. By the Fundamental Theorem of Calculus, .  Putting these two pieces together, we obtain    "
},
{
  "id": "subsec-553-UsingFTC-8",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-553-UsingFTC-8",
  "type": "Example",
  "number": "5.5.14",
  "title": "",
  "body": " Calculate the following derivative    Obviously, we can't use the Fundamental Theorem of Calculus directly since the lower limit of this integral is not a constant.  Dealing with non-constant upper and lower limits are kind of a lot at once... It would be so nice if there is a property of definite integral that allows us to split the integral into two pieces, so we can deal with one of the non-constant limit of integration at a time...    We can actually split the integral into two pieces by one of the properties in . where is a constant within the domain of .  Ha! We know how to deal with the two pieces of the integrals! We will need the chain rule for both pieces of the integrals!  Let's again define the accumulation function to be Then we obtain    "
},
{
  "id": "thm-Generalized-FTC",
  "level": "2",
  "url": "sec55-FTCpartII.html#thm-Generalized-FTC",
  "type": "Theorem",
  "number": "5.5.15",
  "title": "",
  "body": "      "
},
{
  "id": "subsec-554-Graph-AccumulationFunction-4",
  "level": "2",
  "url": "sec55-FTCpartII.html#subsec-554-Graph-AccumulationFunction-4",
  "type": "Example",
  "number": "5.5.16",
  "title": "",
  "body": " Let be the accumulation function defined as where is a function whose graph is shown below.   The graph of         Determine the intervals on which the accumulation function, is increasing (and decreasing)    Determine the value of where the accumulation function, , has a peak (and valley).      Recall that the accumulation function accumulates the signed area under the curve starting from . The region above the -axis should have a positive signed area and the region below the -axis should have a negative signed area.  So do we know at which point(s) we starts accumulating positive area (which makes the overall area greater) and negative area (which makes the overall area smaller)?    Observe that the enclosed region is above the -axis on and . This implies that we are accumulating positive area in these two regions, making the value of the accumulation function increasing.  Similarly, the region on is below the -axis, so we are accumulating negative area in this region, making the value of the accumulation function decreasing.  Hence, is increasing in the interval and decreasing in the interval .  Now let's think about the peaks and valleys. At the point of , we start to accumulate negative area, which makes the overall area smaller. This implies that there is a peak at .  Similarly, at the point of , we start to accumulate positive area, which makes the overall area greater. This implies that there is a valley at .   "
},
{
  "id": "ws-sec55-3-2",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec55-3-3",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec55-3-4",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec55-3-5",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec55-4",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-4",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Prove the formula    Note: By saying \"prove\", Richard means to justify this formula informally. The goal here is to make sure you know how the formula is derived and why each component is necessary. Richard will never look for a technical mathematical proof in this class, but you are certainly more than welcome to try coming up with a proof-y proof and Richard is always happy to chat about it.   "
},
{
  "id": "ws-sec55-5",
  "level": "2",
  "url": "sec55-FTCpartII.html#ws-sec55-5",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Let be the accumulation function defined as Below is the graph of on .   The graph of         Determine the intervals on which the accumulation function, is increasing (and decreasing)    Determine the value of where the accumulation function, , has a peak (and valley).      "
},
{
  "id": "sec56-NetChange",
  "level": "1",
  "url": "sec56-NetChange.html",
  "type": "Section",
  "number": "5.6",
  "title": "Net Change as the Integral of a Rate of Change",
  "body": " Net Change as the Integral of a Rate of Change     In this section, we will learn our first type of application of integration --- Net Change!    After this section, students will be able to:     interpret integral as Adding-up-Pieces.    find the displacement and total distance traveled of an object given the velocity function.    find the net change of some quantity given the rate function.        Imagine this: a gorilla, suited up with a parachute, climbs to the top of a tall city building as part of a special wildlife training experiment. After a brief moment of hesitation, the gorilla bravely leaps off the edge. As the parachute deploys and air resistance kicks in, you, as one of the researchers on the ground, begin recording data to study how the gorilla's velocity changes over time. Using high-speed sensors, the team records the gorilla’s downward velocity every half-second as it falls. Note that the gorilla touched the ground just after 5 seconds. The recorded data is shown below.    Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19        Approximate the total distance the gorilla fell from the time he jumped off the building until the time he landed on the ground.   Rather than approximating the total distance, we can look at how far the gorilla fell during each half-second interval. The table below should help you track the distance.      Time (in seconds)  Approximate distance traveled (in feet)    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0         There are multiple ways to approximate the distance as long as you can make an argument that the velocity you picked for each time interval is reasonable. For demonstration purposes, Richard will approximate the distance using the left-endpoint approximation .      Time  Approximate distance    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0       To find the total distance traveled, we just add up all the pieces of distance we found in the above table.    There is no \"right\" answer to an approximation. The only difference between answers are how good the approximation is.      We know that the total distance traveled we found in part (a) is an approximation, not the exact value (this should be obvious). How can we make the approximation better? What changes could we make to the way we collect the data to make the approximation better?   While it is (highly) unlikely for the velocity to remain constant within a fixed interval of time, it is more and more likely for the velocity to stay constant when the elapsed time is smaller and smaller. That is, to make our approximation better, we want to record more and more data on the velocity, which forces the elapsed time to be smaller and smaller (for example, as opposed to recording the velocity every 0.5 seconds, recording the velocity every 0.1 seconds will make our approximation better).      Relationship between Displacement and Velocity  Recall back in calculus 1, we learned that the derivative of the displacement function gives us the velocity function. To rephrase it using integrals, we know that the antiderivative (or indefinite integral) of the velocity function should give us the displacement function.  But this argument relies on differential calculus (we can't make sense of why the integral of the velocity function gives us the displacement function if we didn't learn about what derivative is). There is a way to make sense of it without relying on derivatives.  Let's call the elapsed time (and it is typically 0.5 seconds) and the velocity of the gorilla at a certain point, where is the index to indicate which piece we are referring to. If we call each piece of the distance , then it can be obtained by We also found out that we can find the total distance by adding up the pieces together. By using the fancy sigma notation you learned before, the total distance traveled is where denotes the number of pieces.  We know that the approximation is better and better if we recorded more and more velocity as that will force the elapsed time to become smaller and smaller. Symbolically speaking, the total distance travel can be computed by   Ha! This looks super familiar! This is exactly how we define the definite integral back in ! Then we have If we are matching components, then   The symbol \" \" is just a fancy cursive S that represents Summation . The and the are the initial and the final value of the time in this context.    The here denotes the velocity of the gorilla at a certain timestamp .    The here represents the elapsed time where the gap is infinitesimal small (so is just a fancy way of representing as the gap approaches ).    The is a representative of one piece of the distance (we multiplied the velocity at time with the elapsed time ), and the symbol tells us to add all the pieces of distance together to obtain the total distance traveled.     This is why the displacement function can be obtained by integrating the velocity function. The integral of velocity function implies that we are adding up pieces of the product of the velocity and the infinitesimally small change in time. This idea of the integral is called the Adding up Pieces .    Displacement vs. Distance Traveled  Given the velocity function , then the net change in position, which is defined as the displacement of an object, over the time interval , is denoted as What about the distance? The terms \"distance\" and \"displacement\" are not necessarily the same concepts...   A particle moves in a straight line with the velocity modeled by the function     Graph the velocity function . Then describe the motion.   See below the graph of    The Graph of      Observe that the graph is positive in , meaning the particle is moving forward; the graph hit zero at , meaning the particle stopped seconds after; and the graph is negative in , meaning the particle is moving backward.     Find the displacement over the first seconds.   For displacement , we don't care what is going on in the middle of the motion, but only the initial and final position. If we call the displacement function , then displacement is simply . FTC is telling us that      Find the total distance traveled over the first seconds.   When finding the total distance traveled , the \"distance\" is always positive, regardless of the direction. But this idea doesn't match up with the integral since the integral of the velocity function on will return a \"negative\" distance. The easiest way to fix the sign is to put on the absolute value to make the \"negative\" distance positive.        Integral of Velocity   For an object in linear motion with velocity ,      A cat falls from a tree (with zero initial velocity) at time . How far does the cat fall between seconds and second? The velocity function is m\/s.   By saying \"how far\", it usually means the total distance traveled.       General Net Change  In general, we can use this trick to compute the net change of some quantity if the rate of change is given.   The traffic flow rate past a certain point on a highway is where is at AM. How many cars pass by from to AM?         Water flows into an empty reservoir at a rate of L per hour ( in hours). What is the quantity of water in the reservoir in the first hours?        The last type of the example is about the marginal cost . Let represent a manufacturer's cost to product units of a particular product or commodity. The derivative is called the marginal cost , the cost of producing one additional unit. The cost of increasing production from units to units is the net change  , which is equal to the integral of the marginal cost.    The marginal cost of producing tablet computers is    What is the production cost of producing units?         What is the additional cost of producing additional units?             Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     A particle moves in a straight line with the velocity Find the displacement and the total distance traveled over the time interval .      Find the net change in velocity over of an object with       Show that a particle, located at the origin at and moving along the -axis with velocity will never pass the point .      A population of insects increases at a rate of insects per day. Find the insect population after days, assuming that there are insects at .     "
},
{
  "id": "sec56-NetChange-3-2",
  "level": "2",
  "url": "sec56-NetChange.html#sec56-NetChange-3-2",
  "type": "Objectives",
  "number": "5.6",
  "title": "",
  "body": "  After this section, students will be able to:     interpret integral as Adding-up-Pieces.    find the displacement and total distance traveled of an object given the velocity function.    find the net change of some quantity given the rate function.    "
},
{
  "id": "sec56-NetChange-4",
  "level": "2",
  "url": "sec56-NetChange.html#sec56-NetChange-4",
  "type": "Investigation",
  "number": "5.6.1",
  "title": "",
  "body": "  Imagine this: a gorilla, suited up with a parachute, climbs to the top of a tall city building as part of a special wildlife training experiment. After a brief moment of hesitation, the gorilla bravely leaps off the edge. As the parachute deploys and air resistance kicks in, you, as one of the researchers on the ground, begin recording data to study how the gorilla's velocity changes over time. Using high-speed sensors, the team records the gorilla’s downward velocity every half-second as it falls. Note that the gorilla touched the ground just after 5 seconds. The recorded data is shown below.    Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19        Approximate the total distance the gorilla fell from the time he jumped off the building until the time he landed on the ground.   Rather than approximating the total distance, we can look at how far the gorilla fell during each half-second interval. The table below should help you track the distance.      Time (in seconds)  Approximate distance traveled (in feet)    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0         There are multiple ways to approximate the distance as long as you can make an argument that the velocity you picked for each time interval is reasonable. For demonstration purposes, Richard will approximate the distance using the left-endpoint approximation .      Time  Approximate distance    0 -- 0.5     0.5 -- 1.0     1.0 -- 1.5     1.5 -- 2.0     2.0 -- 2.5     2.5 -- 3.0     3.0 -- 3.5     3.5 -- 4.0     4.0 -- 4.5     4.5 -- 5.0       To find the total distance traveled, we just add up all the pieces of distance we found in the above table.    There is no \"right\" answer to an approximation. The only difference between answers are how good the approximation is.      We know that the total distance traveled we found in part (a) is an approximation, not the exact value (this should be obvious). How can we make the approximation better? What changes could we make to the way we collect the data to make the approximation better?   While it is (highly) unlikely for the velocity to remain constant within a fixed interval of time, it is more and more likely for the velocity to stay constant when the elapsed time is smaller and smaller. That is, to make our approximation better, we want to record more and more data on the velocity, which forces the elapsed time to be smaller and smaller (for example, as opposed to recording the velocity every 0.5 seconds, recording the velocity every 0.1 seconds will make our approximation better).    "
},
{
  "id": "subsec-562-DisplacementDistance-3",
  "level": "2",
  "url": "sec56-NetChange.html#subsec-562-DisplacementDistance-3",
  "type": "Example",
  "number": "5.6.5",
  "title": "",
  "body": " A particle moves in a straight line with the velocity modeled by the function     Graph the velocity function . Then describe the motion.   See below the graph of    The Graph of      Observe that the graph is positive in , meaning the particle is moving forward; the graph hit zero at , meaning the particle stopped seconds after; and the graph is negative in , meaning the particle is moving backward.     Find the displacement over the first seconds.   For displacement , we don't care what is going on in the middle of the motion, but only the initial and final position. If we call the displacement function , then displacement is simply . FTC is telling us that      Find the total distance traveled over the first seconds.   When finding the total distance traveled , the \"distance\" is always positive, regardless of the direction. But this idea doesn't match up with the integral since the integral of the velocity function on will return a \"negative\" distance. The easiest way to fix the sign is to put on the absolute value to make the \"negative\" distance positive.      "
},
{
  "id": "thm-IntegralVelocity",
  "level": "2",
  "url": "sec56-NetChange.html#thm-IntegralVelocity",
  "type": "Theorem",
  "number": "5.6.7",
  "title": "Integral of Velocity.",
  "body": " Integral of Velocity   For an object in linear motion with velocity ,    "
},
{
  "id": "subsec-562-DisplacementDistance-5",
  "level": "2",
  "url": "sec56-NetChange.html#subsec-562-DisplacementDistance-5",
  "type": "Example",
  "number": "5.6.8",
  "title": "",
  "body": " A cat falls from a tree (with zero initial velocity) at time . How far does the cat fall between seconds and second? The velocity function is m\/s.   By saying \"how far\", it usually means the total distance traveled.    "
},
{
  "id": "subsec-563-NetChange-3",
  "level": "2",
  "url": "sec56-NetChange.html#subsec-563-NetChange-3",
  "type": "Example",
  "number": "5.6.9",
  "title": "",
  "body": " The traffic flow rate past a certain point on a highway is where is at AM. How many cars pass by from to AM?       "
},
{
  "id": "subsec-563-NetChange-4",
  "level": "2",
  "url": "sec56-NetChange.html#subsec-563-NetChange-4",
  "type": "Example",
  "number": "5.6.10",
  "title": "",
  "body": " Water flows into an empty reservoir at a rate of L per hour ( in hours). What is the quantity of water in the reservoir in the first hours?       "
},
{
  "id": "subsec-563-NetChange-6",
  "level": "2",
  "url": "sec56-NetChange.html#subsec-563-NetChange-6",
  "type": "Example",
  "number": "5.6.11",
  "title": "",
  "body": " The marginal cost of producing tablet computers is    What is the production cost of producing units?         What is the additional cost of producing additional units?          "
},
{
  "id": "ws-sec56-3",
  "level": "2",
  "url": "sec56-NetChange.html#ws-sec56-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A particle moves in a straight line with the velocity Find the displacement and the total distance traveled over the time interval .   "
},
{
  "id": "ws-sec56-4",
  "level": "2",
  "url": "sec56-NetChange.html#ws-sec56-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the net change in velocity over of an object with    "
},
{
  "id": "ws-sec56-5",
  "level": "2",
  "url": "sec56-NetChange.html#ws-sec56-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Show that a particle, located at the origin at and moving along the -axis with velocity will never pass the point .   "
},
{
  "id": "ws-sec56-6",
  "level": "2",
  "url": "sec56-NetChange.html#ws-sec56-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  A population of insects increases at a rate of insects per day. Find the insect population after days, assuming that there are insects at .   "
},
{
  "id": "sec57-uSub",
  "level": "1",
  "url": "sec57-uSub.html",
  "type": "Section",
  "number": "5.7",
  "title": "The Substitution Method",
  "body": " The Substitution Method   In this section, you will learn one technique of evaluating integrals, called the substitution method (also known as the -sub). This is one of the most important and widely used methods in this class.    After this section, students will be able to:     evaluate indefinite integrals using -sub and rewrite the final answer in terms of .    recognize which integrals can be evaluated using -sub and which ones cannot be evaluated using -sub.    apply -sub in definite integrals by changing the limits of integration to match the new variable.        Recall we learned the chain rule back in calculus 1, which is a method to differentiate composite functions.  Let be a composite function. We can see that is the outside function and is the inside function. The chain rule says that    Note: I know that this notation is different from the typical and you saw back in calculus 1. I am using and to match up the typical calculus 2 notation but the idea is the same.     What is the derivative of of the function ?   Observe that the outside function is and the inside function is . Using the chain rule, we obtain      Evaluate the indefinite integral    Recall that this expression tells us to find the general antiderivative of the function . So what functions will give the derivative of ?  Maybe part (a) in this investigation will give you an idea...    Observing from part (a) of the investigation, we know that This implies that    Observe that we don't simply integrate each factor of the integrand and multiply the results...      See that we can’t just simply integrate each factor of the integrand when integrating a factor of two functions, especially when one of the factors is a composite function. Rather than guessing and checking (and relying on Richard providing the answers occasionally), it will be so nice for us to learn how to integrate product of functions when one of the factors is a composite function.  You can kind of get a feeling that chain rule is probably important in this section. It turns out that we can come up with a new fancy method of integration by undoing the chain rule.   Substitution Method for Indefinite Integrals  Suppose we have a composite function where is the outside function and is the inside function. By the chain rule, we know that if we are assuming the derivative of is . Recall we can rewrite a derivative formula using integration so we can rewrite the chain rule using integration.   Substitution Method for Indefinite Integrals   If , and is a differentiable function whose range includes the domain of , then     We can use this formula IF the format of the integrand stays exactly the same as the one in the formula. That is, the formula is useful when we are integrating the product of a composite function and the derivative of the inside function.   Evaluate the indefinite integral using the formula in the above theorem.   To use the formula, we need a composite function and the derivative of the inside function being multiplied as the integrand. So the two questions to consider here are:   What is a composite function that stood out to you? After you have identified a composite function, what is the outside function and the inside function?  Label the outside function as and the inside function as .     What is the derivative of the inside function, ? Can we find as a factor in the integrand?   After you found the components of the integrand and checked off the second question, try figuring out what is and obtaining the answer by plugging in each component to the formula.    There is only one composite function in the integrand, which is . Then we can label Observe that , which is a factor in the integrand. Then this integral matches up with the left-hand side of the formula in .  We know that Then we can plug in all these components to the formula and obtain the answer:     A common question here is where the went in the process since we only integrated the sine function. This is a great question that leads us to develop a less-confusing notation presentation for -sub (using differentials).  Richard can for sure answer this question now! Recall is the derivative of the inside function, which appears out of no where in the chain rule for derivative. Of course this part should be disappearing if we undoes the derivative.  We will next discuss another presentation of -sub using differentials. This presentation is also the reason why we call this method the -sub .   Substitution Using Differentials  As the name of -sub suggested, we should be substituting for something. Let's forget about the formula we learned above and try a problem using only substitution (so you can forget about the above formula for a while)!   Evaluate the indefinite integral    Recall should be some inside function in a composite function. Then what is a composite function that stood out to you and what should the be?  After you determine what the is, try substituting ALL the 's in the indefinite integral with , including the differential . The resulting integral should be easier than the original integral in the prompt.    The composite function in the integrand is , with the inside function of . So let's pick . If we substitute for , then the integral becomes Sure the integral becomes a bit easier. But this is also a super confusing integral since it includes TWO different variables, and .  One way to resolve this confusion is to replace ALL the 's in terms of 's. The hardest substitution here is the differential, ... How do we replace the in terms of ...  One expression that contains both and is the derivative of with respect to . Recall we defined . Then If we abuse the notation a bit by treating the derivative notation as a fraction, we can multiply the on both sides of this equation. Then we obtain Hmm the looks super familiar... They are also part of the integral! Hence, we can substitute with as follows: Now there is only one variable, , in the integral and we for sure know how to evaluate this integral! Using the power rule, we know that Don't forget that is essentially . We can obtain the final answer by replacing back for .     Observe that the derivative of the inside function, , is being absorbed as part of the differential, . This is essentially the change of variable trick by treating as the new variable. Symbolically, we can adjust the formula in the above theorem as follows:   There is certainly an advantage of using this method. We don't need to worry about matching up each component with the formula in the above theorem in order to use the formula. But the tradeoff here is that we need to substitute ALL the 's (or whatever the previous variable is) with 's (or whatever we call the new variable), including the differentials. Sometimes this is not an easy job (or sometimes it is just impossible).  Richard doesn't like to memorize one more formula so he likes to do all of his -sub problems using the differential approach (there is one more reason why Richard likes this approach).   Evaluate the indefinite integral    We are learning -sub so we probably can evaluate this integral using -sub. Recall we pick to be some inside function of a composite function. What is a we can pick here?    There are more than one composite functions so there are more than one choice of we can pick.  Richard will pick (and he has a good reason). He will work through the problem and let's see if you can figure out what this good reason is.  Let . To find the , we will need to take the derivative of with respect to . Then we obtain Observe that we can find in the integral, which equals to by the above equation. Substituting and in the integral, we obtain     The reason why Richard knows picking will work out in the above example is because he noticed that , which is if we neglect the constant multiple, is a factor in the integrand. Observe that he can instantly replace by quickly.  In general, whatever we pick, we know this choice of will likely to work out if we can find as a factor of the integrand (and we can neglect the constant multiple of ). We will elaborate this idea more in the section of the limitation of -sub.   Can I isolate in the above example?  Recall the substitution Richard used in the previous example is to replace by based on the equation A natural follow-up question here is whether we can isolate the entirely and replace to the integral as follows: It seems like this \"divide-and-cancel\" method will lead us to the same answer anyways, so is this a valid method?  Well I guess it all depends on how much you care about the rigor in math. If all you care about is to obtain an answer, then by all means. This method will work 90% of the time (I know it sounds sarcastic but it is really not...).  But if you do care about the rigor in math (like Richard), then this method should be bugging you because the divisor, , could potentially be zero here since is in the domain of the integrand. In math, we never want to divide something that could potentially be zero. So dividing a variable before verifying it can never be zero is a bad idea.  An example I always use if I am teaching algebra and precalculus at PCC is to solve the equation by dividing an on both sides of the equation. While we obtain a solution indeed through the division of , we also miss the solution of .  I probably won't give you any questions in this extreme that the \"divide-and-cancel\" method will lead to the loss of some solution (because this isn't a differential equation class). So I will leave it up to you if you want to use this \"divide-and-cancel\" method. At least there is no harm in this class (I think...).    Evaluate the indefinite integral    Let's evaluate this integral using -sub. Recall a good choice of is the ones that you can find its derivative as a factor of the integrand. So what is a good choice of ?    There is only one composite function in the integrand, which implies that the , aka the only inside function, should be .  Let . To replace in terms of , we will differentiate with respect to . Then we obtain     Linear -sub  Back in calculus 1, recall that we can simply multiply the slope of the inside function when taking the derivative if the inside function is a linear function . This skill transfers to -sub too if the inside function, , is a linear function. Instead of multiplying the slope, we will divide the slope.  To justify this division process, we can assume that , a typical linear function. Then we obtain See that if we replace the with the , we essentially divide the answer by .  This is a quick little shortcut you can take to boost up the proficiency of -sub, especially since this is one of the most widely-used methods among the other methods we will talk about in this class.  Now let's try the following problem and see if you can obtain the answer quickly .   Evaluate the indefinite integral    Observe that the inside function, which we can for sure call it , is a linear function. Then what is the slope and how can we obtain the answer quickly without going through all the work for -sub?    Observe that the inside function, , is a linear function with the slope of . Then we can divide the slope, integrate the outside function, and plug in the inside function (and don't forget the ).    If this line of work doesn't convince you, then I would suggest you working out this problem using -sub and observe how the answer can be obtained quickly.       Hmm but does have to be some inside function? The answer is no... Essentially we can pick whatever we want in the integrand to be , but you want to make sure you are able to replace all the 's with 's.   Evaluate the indefinite integral    Observe that there is a composite function in the integrand with the inside function of . Based on our previous strategy, we should be calling it .  Let's try picking to be the inside function and see what will happen.  If you are ready to give up or open to another method, try picking and see if it will work out nicely.    Choice #1: Let   This will work out but the work is a bit more complicated since you will need to -sub it twice.   Let . Then we have This implies that Okay... we are able to replace all the 's with 's and the integral is a bit easier (see that there is no more trigonometric functions in the integrand). But this is kind of discouraging since there is no formula to help us integrate this function...  To proceed, we will need to do another -sub by letting . Then This implies that Ha! We evaluated the integral! We will just need to put everything together and replace back the variable to .     Choice #2: Let  Let's follow Richard's hint and let . Then we have This implies that    Observe that this choice of made the process a lot easier .     How do I know what is the I should pick?  For starters, we can pick whatever in the integrand to be the . But whatever you pick, you want to make sure two things:   All the variables should be turned to (or whatever the new variable is), including the differential, and    the new integral after the substitution should be easier to evaluate compared to the original integral.   If your choice of doesn't do the above two things, then this is a bad and you should either pick another or try a different method.   But there is a difference between picking a good and picking the best ...  The above example should demonstrate the difference. The first choice of is a good but is not the most efficient option, while the second choice of is the best since we were able to evaluate the integral right after the substitution.  So I guess the next question here is how to pick the best ... Well it actually takes a bit guess-and-check-ing and experience. I will encourage you to first practice on how to pick a good  to make sure at least you can solve the problem. Once you are comfortable and proficient at using -sub, then knowing what the best may be will come naturally.      Limitation of -sub  Recall we can take the derivative of ALL composite functions using the chain rule. Since we derived the -sub formula from the chain rule, does it mean we can integrate ALL the composite functions using this method of -sub? Let's think about this question in the following example:    Determine whether we can evaluate the following integral using -sub. If so, do it. If not, why not?        A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We can evaluate this integral using -sub (or even easier if you can observe that the inside function is a linear function).  Let . Then we have This implies that          A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We cannot evaluate this integral using -sub because we won't be able to group the out of it. But let's try using -sub nevertheless and see where we will get stuck.  Let . Then we have Yet there is no extra factor of in the integrand that we can group together with to give us a out of it. So we are stuck...   if you are thinking of using the \"divide-and-cancel\" method...  You may consider isolating the as follows (the hidden assumption here is that ...) and substitute as follows: Well the resulting integral after the substitution still contains two variables (since there is not a factor of in the integrand to cancel the in the denominator with).  Well one way to resolve this issue is to figure out what is in terms of (by isolating in the equation of ).  Observe that . Then the resulting integral becomes See that the integral doesn't become easier... This should be a cue that -sub doesn't work. We should give up and try something else.       We can make an observation from the above example about the -sub-ability of an integral. If part of the is missing in the integrand, and it is more than just a constant, then -sub won't work in general.   We know -sub won't work if part of is missing, and the missing part is a non-constant. But what if we go the other way. What if the integrand has an extra non-constant piece? Can we still -sub the integral?   Evaluate the indefinite integral    There is an inside function screaming to us, which is . Let's pick this as our . But what about the extra factor of ... We for sure don't want to have more than one variable in the integral...    Let . Then we know that . This implies that Hmm... there is an extra factor of in the integrand... This is not good... Is there anyway that we can replace it in terms of ?   Yes there is! Recall we define . This implies that . We can now substitute with !   Ha! We do know how to evaluate this integral! Hence, we can still evaluate this integral with an extra factor of in the integrand!       Substitution Method for Definite Integrals  After we are fluent at finding the indefinite integral using -sub, then evaluating the definite integral using -sub should be straightforward since the only additional steps are plugging in the upper and lower limits to some antiderivative and do the subtraction, guaranteed by the Fundamental Theorem of calculus. Yet things are a little bit more complicated as it appears. The process of changing the variable complicates the notation.   Evaluate the definite integral    There are actually two ways of approaching this problem and we will try both methods!   Method #1: Observe that this is a linear -sub so we can find an antiderivative of the integrand quickly. Let's use the FTC (find an antiderivative, plug in the limits of integration, and do the subtraction) and obtain the answer.   Method #2: Let's try using -sub formally! Obviously, here. The next step in -sub is to replace all the 's in terms of . So let's do it! In addition to the inside function and the differential that we need to replace in terms of , what else do we need to adjust?    Method #1: Using FTC directly  Observe that the inside function is a linear function with the slope of . Then we can find an antiderivative of the integrand quickly: Then by the Fundamental Theorem of Calculus, we obtain     Method #2: Using -sub (and then FTC)  If we want to use -sub, then obviously we should pick . This implies that Then after substitution, the integral will become . Did we successfully replace all the 's in terms of ?  The answer is no! There is one part that we forgot to adjust, which is the limits of integration ! Remember the limits of integration, and , are some values! Since our job now is to replace ALL the 's in terms of , this includes the limits of integration as well!   When ,     When ,    Hence, the correct integral we should obtain after -sub is   The resulting integral looks like something we can evaluate directly!     Why splitting hairs and calling them two different methods?  You may be wondering about this: aren't the two methods essentially the same? Why making this distinction on the limits of integration...  The answer is to avoid confusion and ambiguity of the work. Imagine someone mixed up the notation of the two methods in this example by writing the work like this:   Well the limits of integration isn't consistent going across the first equal sign. What we think the first line should be is really Observe that we didn't fully replace all the 's in terms of 's n step 1. This is bad.  Even if you can try to remember to replace all the 's back with 's before you plug in the limits of integration (a lot of the students can't, by the way), not everything are equal in the work...  We don't interpret as in general...  If you put to Desmos and let it do the calculation for you, then the answer returned is undefined , not . The reason is because most calculators (and we should too!) will directly plug in the limits of integrations to the specific variable used in the integral (so Desmos interpreted the limits of integration as some values). This implies that our work suggests underfine ... Hmm but this is wrong.   Keeping a clear and correct notation will not only help you keep track of the work in writing, but also to make sure the work you produced is mathematically correct. This is why Richard emphasizes the different notations as two different methods.      If is continuous on , and is continuous on the range of , then     What the theorem emphasizes is to adjust the limits of integration when changing the variable . Observe in the above example that we don't need to plug back if you adjust the limits of integration along with your -sub.   Evaluate the definite integral    We are in the -sub section so we probably can evaluate this integral using -sub. Then we will need to pick a first.  Observe that the numerator of the integrand is , which seems like the derivative of the inside function in the denominator, which is , if we neglect the constant multiple. So what is a good we can pick?  Once you pick your , make sure you replace all the 's in terms of and don't forget to adjust the limits of integration if you want to carry the in your computation.    Let . Then we have In addition, we also know that   when , ;    when , .   This implies that      Later in the term, we will be dealing with integrals with trig in it (trigonometric integrals). We can evaluate a lot of trigonometric integrals using -sub since the derivative or sine and cosine are just each other (if we neglect the coefficient). If you need more practice of -sub, jumping to section 7.2 is a good idea.   Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following indefinite integral using methods covered in class so far.                                                Evaluate the following definite integral. Pay attention to the limits of integration if necessary.                   "
},
{
  "id": "sec57-uSub-2-2",
  "level": "2",
  "url": "sec57-uSub.html#sec57-uSub-2-2",
  "type": "Objectives",
  "number": "5.7",
  "title": "",
  "body": "  After this section, students will be able to:     evaluate indefinite integrals using -sub and rewrite the final answer in terms of .    recognize which integrals can be evaluated using -sub and which ones cannot be evaluated using -sub.    apply -sub in definite integrals by changing the limits of integration to match the new variable.    "
},
{
  "id": "sec57-uSub-3",
  "level": "2",
  "url": "sec57-uSub.html#sec57-uSub-3",
  "type": "Investigation",
  "number": "5.7.1",
  "title": "",
  "body": "  Recall we learned the chain rule back in calculus 1, which is a method to differentiate composite functions.  Let be a composite function. We can see that is the outside function and is the inside function. The chain rule says that    Note: I know that this notation is different from the typical and you saw back in calculus 1. I am using and to match up the typical calculus 2 notation but the idea is the same.     What is the derivative of of the function ?   Observe that the outside function is and the inside function is . Using the chain rule, we obtain      Evaluate the indefinite integral    Recall that this expression tells us to find the general antiderivative of the function . So what functions will give the derivative of ?  Maybe part (a) in this investigation will give you an idea...    Observing from part (a) of the investigation, we know that This implies that    Observe that we don't simply integrate each factor of the integrand and multiply the results...     "
},
{
  "id": "thm-usub-indefinite",
  "level": "2",
  "url": "sec57-uSub.html#thm-usub-indefinite",
  "type": "Theorem",
  "number": "5.7.2",
  "title": "Substitution Method for Indefinite Integrals.",
  "body": " Substitution Method for Indefinite Integrals   If , and is a differentiable function whose range includes the domain of , then    "
},
{
  "id": "subsec-571-Indefinite-5",
  "level": "2",
  "url": "sec57-uSub.html#subsec-571-Indefinite-5",
  "type": "Example",
  "number": "5.7.3",
  "title": "",
  "body": " Evaluate the indefinite integral using the formula in the above theorem.   To use the formula, we need a composite function and the derivative of the inside function being multiplied as the integrand. So the two questions to consider here are:   What is a composite function that stood out to you? After you have identified a composite function, what is the outside function and the inside function?  Label the outside function as and the inside function as .     What is the derivative of the inside function, ? Can we find as a factor in the integrand?   After you found the components of the integrand and checked off the second question, try figuring out what is and obtaining the answer by plugging in each component to the formula.    There is only one composite function in the integrand, which is . Then we can label Observe that , which is a factor in the integrand. Then this integral matches up with the left-hand side of the formula in .  We know that Then we can plug in all these components to the formula and obtain the answer:    "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-3",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-3",
  "type": "Example",
  "number": "5.7.4",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall should be some inside function in a composite function. Then what is a composite function that stood out to you and what should the be?  After you determine what the is, try substituting ALL the 's in the indefinite integral with , including the differential . The resulting integral should be easier than the original integral in the prompt.    The composite function in the integrand is , with the inside function of . So let's pick . If we substitute for , then the integral becomes Sure the integral becomes a bit easier. But this is also a super confusing integral since it includes TWO different variables, and .  One way to resolve this confusion is to replace ALL the 's in terms of 's. The hardest substitution here is the differential, ... How do we replace the in terms of ...  One expression that contains both and is the derivative of with respect to . Recall we defined . Then If we abuse the notation a bit by treating the derivative notation as a fraction, we can multiply the on both sides of this equation. Then we obtain Hmm the looks super familiar... They are also part of the integral! Hence, we can substitute with as follows: Now there is only one variable, , in the integral and we for sure know how to evaluate this integral! Using the power rule, we know that Don't forget that is essentially . We can obtain the final answer by replacing back for .    "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-7",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-7",
  "type": "Example",
  "number": "5.7.5",
  "title": "",
  "body": " Evaluate the indefinite integral    We are learning -sub so we probably can evaluate this integral using -sub. Recall we pick to be some inside function of a composite function. What is a we can pick here?    There are more than one composite functions so there are more than one choice of we can pick.  Richard will pick (and he has a good reason). He will work through the problem and let's see if you can figure out what this good reason is.  Let . To find the , we will need to take the derivative of with respect to . Then we obtain Observe that we can find in the integral, which equals to by the above equation. Substituting and in the integral, we obtain    "
},
{
  "id": "note-isolate-dx-usub",
  "level": "2",
  "url": "sec57-uSub.html#note-isolate-dx-usub",
  "type": "Note",
  "number": "5.7.6",
  "title": "Can I isolate <span class=\"process-math\">\\(\\boldsymbol{dt}\\)<\/span> in the above example?",
  "body": " Can I isolate in the above example?  Recall the substitution Richard used in the previous example is to replace by based on the equation A natural follow-up question here is whether we can isolate the entirely and replace to the integral as follows: It seems like this \"divide-and-cancel\" method will lead us to the same answer anyways, so is this a valid method?  Well I guess it all depends on how much you care about the rigor in math. If all you care about is to obtain an answer, then by all means. This method will work 90% of the time (I know it sounds sarcastic but it is really not...).  But if you do care about the rigor in math (like Richard), then this method should be bugging you because the divisor, , could potentially be zero here since is in the domain of the integrand. In math, we never want to divide something that could potentially be zero. So dividing a variable before verifying it can never be zero is a bad idea.  An example I always use if I am teaching algebra and precalculus at PCC is to solve the equation by dividing an on both sides of the equation. While we obtain a solution indeed through the division of , we also miss the solution of .  I probably won't give you any questions in this extreme that the \"divide-and-cancel\" method will lead to the loss of some solution (because this isn't a differential equation class). So I will leave it up to you if you want to use this \"divide-and-cancel\" method. At least there is no harm in this class (I think...).  "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-11",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-11",
  "type": "Example",
  "number": "5.7.7",
  "title": "",
  "body": " Evaluate the indefinite integral    Let's evaluate this integral using -sub. Recall a good choice of is the ones that you can find its derivative as a factor of the integrand. So what is a good choice of ?    There is only one composite function in the integrand, which implies that the , aka the only inside function, should be .  Let . To replace in terms of , we will differentiate with respect to . Then we obtain     Linear -sub  Back in calculus 1, recall that we can simply multiply the slope of the inside function when taking the derivative if the inside function is a linear function . This skill transfers to -sub too if the inside function, , is a linear function. Instead of multiplying the slope, we will divide the slope.  To justify this division process, we can assume that , a typical linear function. Then we obtain See that if we replace the with the , we essentially divide the answer by .  This is a quick little shortcut you can take to boost up the proficiency of -sub, especially since this is one of the most widely-used methods among the other methods we will talk about in this class.  Now let's try the following problem and see if you can obtain the answer quickly .   Evaluate the indefinite integral    Observe that the inside function, which we can for sure call it , is a linear function. Then what is the slope and how can we obtain the answer quickly without going through all the work for -sub?    Observe that the inside function, , is a linear function with the slope of . Then we can divide the slope, integrate the outside function, and plug in the inside function (and don't forget the ).    If this line of work doesn't convince you, then I would suggest you working out this problem using -sub and observe how the answer can be obtained quickly.      "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-13",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-13",
  "type": "Example",
  "number": "5.7.10",
  "title": "",
  "body": " Evaluate the indefinite integral    Observe that there is a composite function in the integrand with the inside function of . Based on our previous strategy, we should be calling it .  Let's try picking to be the inside function and see what will happen.  If you are ready to give up or open to another method, try picking and see if it will work out nicely.    Choice #1: Let   This will work out but the work is a bit more complicated since you will need to -sub it twice.   Let . Then we have This implies that Okay... we are able to replace all the 's with 's and the integral is a bit easier (see that there is no more trigonometric functions in the integrand). But this is kind of discouraging since there is no formula to help us integrate this function...  To proceed, we will need to do another -sub by letting . Then This implies that Ha! We evaluated the integral! We will just need to put everything together and replace back the variable to .     Choice #2: Let  Let's follow Richard's hint and let . Then we have This implies that    Observe that this choice of made the process a lot easier .   "
},
{
  "id": "Strategy-Pick-u",
  "level": "2",
  "url": "sec57-uSub.html#Strategy-Pick-u",
  "type": "Note",
  "number": "5.7.11",
  "title": "How do I know what is the <span class=\"process-math\">\\(\\boldsymbol{u}\\)<\/span> I should pick?",
  "body": " How do I know what is the I should pick?  For starters, we can pick whatever in the integrand to be the . But whatever you pick, you want to make sure two things:   All the variables should be turned to (or whatever the new variable is), including the differential, and    the new integral after the substitution should be easier to evaluate compared to the original integral.   If your choice of doesn't do the above two things, then this is a bad and you should either pick another or try a different method.   But there is a difference between picking a good and picking the best ...  The above example should demonstrate the difference. The first choice of is a good but is not the most efficient option, while the second choice of is the best since we were able to evaluate the integral right after the substitution.  So I guess the next question here is how to pick the best ... Well it actually takes a bit guess-and-check-ing and experience. I will encourage you to first practice on how to pick a good  to make sure at least you can solve the problem. Once you are comfortable and proficient at using -sub, then knowing what the best may be will come naturally.  "
},
{
  "id": "subsec-572-limitation-3",
  "level": "2",
  "url": "sec57-uSub.html#subsec-572-limitation-3",
  "type": "Example",
  "number": "5.7.12",
  "title": "",
  "body": "  Determine whether we can evaluate the following integral using -sub. If so, do it. If not, why not?        A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We can evaluate this integral using -sub (or even easier if you can observe that the inside function is a linear function).  Let . Then we have This implies that          A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We cannot evaluate this integral using -sub because we won't be able to group the out of it. But let's try using -sub nevertheless and see where we will get stuck.  Let . Then we have Yet there is no extra factor of in the integrand that we can group together with to give us a out of it. So we are stuck...   if you are thinking of using the \"divide-and-cancel\" method...  You may consider isolating the as follows (the hidden assumption here is that ...) and substitute as follows: Well the resulting integral after the substitution still contains two variables (since there is not a factor of in the integrand to cancel the in the denominator with).  Well one way to resolve this issue is to figure out what is in terms of (by isolating in the equation of ).  Observe that . Then the resulting integral becomes See that the integral doesn't become easier... This should be a cue that -sub doesn't work. We should give up and try something else.      "
},
{
  "id": "subsec-572-limitation-6",
  "level": "2",
  "url": "sec57-uSub.html#subsec-572-limitation-6",
  "type": "Example",
  "number": "5.7.14",
  "title": "",
  "body": " Evaluate the indefinite integral    There is an inside function screaming to us, which is . Let's pick this as our . But what about the extra factor of ... We for sure don't want to have more than one variable in the integral...    Let . Then we know that . This implies that Hmm... there is an extra factor of in the integrand... This is not good... Is there anyway that we can replace it in terms of ?   Yes there is! Recall we define . This implies that . We can now substitute with !   Ha! We do know how to evaluate this integral! Hence, we can still evaluate this integral with an extra factor of in the integrand!    "
},
{
  "id": "subsec-573-Definite-3",
  "level": "2",
  "url": "sec57-uSub.html#subsec-573-Definite-3",
  "type": "Example",
  "number": "5.7.15",
  "title": "",
  "body": " Evaluate the definite integral    There are actually two ways of approaching this problem and we will try both methods!   Method #1: Observe that this is a linear -sub so we can find an antiderivative of the integrand quickly. Let's use the FTC (find an antiderivative, plug in the limits of integration, and do the subtraction) and obtain the answer.   Method #2: Let's try using -sub formally! Obviously, here. The next step in -sub is to replace all the 's in terms of . So let's do it! In addition to the inside function and the differential that we need to replace in terms of , what else do we need to adjust?    Method #1: Using FTC directly  Observe that the inside function is a linear function with the slope of . Then we can find an antiderivative of the integrand quickly: Then by the Fundamental Theorem of Calculus, we obtain     Method #2: Using -sub (and then FTC)  If we want to use -sub, then obviously we should pick . This implies that Then after substitution, the integral will become . Did we successfully replace all the 's in terms of ?  The answer is no! There is one part that we forgot to adjust, which is the limits of integration ! Remember the limits of integration, and , are some values! Since our job now is to replace ALL the 's in terms of , this includes the limits of integration as well!   When ,     When ,    Hence, the correct integral we should obtain after -sub is   The resulting integral looks like something we can evaluate directly!     Why splitting hairs and calling them two different methods?  You may be wondering about this: aren't the two methods essentially the same? Why making this distinction on the limits of integration...  The answer is to avoid confusion and ambiguity of the work. Imagine someone mixed up the notation of the two methods in this example by writing the work like this:   Well the limits of integration isn't consistent going across the first equal sign. What we think the first line should be is really Observe that we didn't fully replace all the 's in terms of 's n step 1. This is bad.  Even if you can try to remember to replace all the 's back with 's before you plug in the limits of integration (a lot of the students can't, by the way), not everything are equal in the work...  We don't interpret as in general...  If you put to Desmos and let it do the calculation for you, then the answer returned is undefined , not . The reason is because most calculators (and we should too!) will directly plug in the limits of integrations to the specific variable used in the integral (so Desmos interpreted the limits of integration as some values). This implies that our work suggests underfine ... Hmm but this is wrong.   Keeping a clear and correct notation will not only help you keep track of the work in writing, but also to make sure the work you produced is mathematically correct. This is why Richard emphasizes the different notations as two different methods.   "
},
{
  "id": "thm-usub-definite",
  "level": "2",
  "url": "sec57-uSub.html#thm-usub-definite",
  "type": "Theorem",
  "number": "5.7.17",
  "title": "",
  "body": "  If is continuous on , and is continuous on the range of , then    "
},
{
  "id": "subsec-573-Definite-6",
  "level": "2",
  "url": "sec57-uSub.html#subsec-573-Definite-6",
  "type": "Example",
  "number": "5.7.18",
  "title": "",
  "body": " Evaluate the definite integral    We are in the -sub section so we probably can evaluate this integral using -sub. Then we will need to pick a first.  Observe that the numerator of the integrand is , which seems like the derivative of the inside function in the denominator, which is , if we neglect the constant multiple. So what is a good we can pick?  Once you pick your , make sure you replace all the 's in terms of and don't forget to adjust the limits of integration if you want to carry the in your computation.    Let . Then we have In addition, we also know that   when , ;    when , .   This implies that    "
},
{
  "id": "ws-sec57-3-2",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-3",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-4",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-5",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-6",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-7",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-4-2",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-4-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-4-3",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-4-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "sec58-FurtherIntegralFormulas",
  "level": "1",
  "url": "sec58-FurtherIntegralFormulas.html",
  "type": "Section",
  "number": "5.8",
  "title": "Further Integral Formulas",
  "body": " Further Integral Formulas   In this section, you will undo even more derivative formulas you learned back in calculus 1 in terms of integrations.    After this section, students will be able to:     integrate using integral formulas involving inverse trigonometric functions.    integrate using integral formulas involving exponential functions.        Evaluate the indefinite integral     Can we evaluate this integral using -sub?   We can certainly try using -sub and see if it will work out. Recall -sub undoes the chain rule for derivative, which is a method to differentiate a composite function. Typically, is some inside function in some composite function.  There are two choices of as an inside function you can pick. Try them! Will they work out? If not, what seems to be the issue?    Choice #1: Let  We cannot use -sub here. There are many issues that needs to be resolved in order to make progress... And  If we pick . Then , which implies that . But there is no factor of in the integrand that allows us substitute with . So we will get stuck here...  A possible way to resolve this issue is to isolate the entirely by dividing the to the other side (and pretending can never be zero). This implies that . By this substitution, we obtain Okay... but there is still an in the integrand. This is super confusing since the variable we are dealing with now is , not . Given our substitution that , we see that . Then the integral becomes Wow... the integral doesn't get easier after all this hard work... This should be an indicator to search for another method to evaluate this integral . -sub should make the integral easier to deal with, not harder.  If you are feeling a bit adventurous and want to continue with this line of work (to see if it will work out eventually), the next step will be to make another substitution by letting . Then and . Then we obtain Observe that this integral is almost the same as the integral given in the prompt, which means we looped back to the problem after all the hard work... Another way of saying this is that this method is inconclusive...    Choice #2: Let  Richard can tell right ahead that this choice of is also inconclusive (it will loop you back to the problem as well) due to his awesome math skills. But just in case he didn't lose his mind, he will present the work (and also convince himself that he is still young and he can do the math in his head).  Let . Then , which implies that We obtain Observe that this integral is (again) almost the same as the integral given in the prompt. We (again) looped back back to the problem after the hard work...     Evaluate this integral not using -sub, but using the hint given below.   This may seem like a totally irrelevant hint but what is the derivative of You learned this back in calculus 1 so feel free to look up your notes.   Clarifying the notation  The function means the inverse sine of .  Another famous notation for inverse sine is . Be careful with this exponent of . This doesn't mean the reciprocal of .  I will use both notations interchangeably.     Recall back in calculus 1, we learned about the derivative of inverse trigonometric function. One of the formulas is In other words, we can rewrite the above formula using integration as follows: Hence, we can evaluate this integral as follows:      Recall we learned a couple formulas about taking the derivative of the inverse trigonometric functions back in calculus 1. If we rewrite these formulas, we will obtain more formulas to help us evaluate integrals.   Integral formulas involving inverse trigonometric functions  Back in calculus 1, you learned the derivative of the six inverse trigonometric functions. Of course we can rewrite the six derivative formulas into the three integrals formulas in the following theorem.   Integrals Involving Inverse Trigonometric Functions          Why do we only rewrite three of the six derivative formulas?  Recall we have six inverse trigonometric functions. Why do we only have three integral formulas in the above theorem?  That is because of the \"co-\" in cosine, cotangent, and cosecant.  Recall the prefix \"co-\" in trigonometry means \"complementary angles\", meaning angles that add up to (or in radian). That is, given a ratio , we have the following identities: See that the three inverse trigonometric functions that has the \"co-\" in their names can be converted to the other three trigonometric functions. So that is why we only focus on three of the six inverse trigonometric functions when undoing the integral formulas (the other three are only differ by the signs).    Evaluate the indefinite integral    The bad news here is that we cannot simplify the fraction (there is nothing we can cancel here)...  You may try using -sub and it will work out if you use it smartly.  Here is Richard's hint: before using -sub, try splitting up the fraction as follows: Do we know how to integrate each term?    Using Richard's hint and linearity, we know that   Observe that there is a formula in we can use directly to evaluate the first integral. Hence, the first integral can be evaluated as follows:   For the second integral, we can evaluate it using -sub. Let . Then , and hence . This implies that   Putting these two pieces together, we obtain     One thing you may notice from the previous example is that similar integrals can lead to very different result. Then how do we know which method, -sub or applying the integral formulas involving inverse trigonometric function, should I use?  Richard would suggest you always try -sub first. If -sub works out, then great! If -sub doesn't work out, then we can consider using a more complicated integral formula.  Also, we will develop a more fancy method (a special type of substitution) to evaluate more complicated integrals instead of using the complicated formulas. If you don't like to use the integral formulas involving inverse trigonometric functions. Hang tight, and we will approach these types of integral differently.   Evaluate the definite integral    Observe that there are some inside functions in the integrand, so -sub may be a good way to go.  Let's try -sub first! Does -sub work out? Why or why not?  If you are open to another route to evaluate this integral, Richard will give a hint that the following formula may be helpful because of the resemblance.     You can verify it quickly that -sub doesn't work here. So Richard will try using the formula he gave in the hint.  To use the formula in the hint, observe that the constant term in the square root must be a . To make it happen, the trick to do here is factoring.   Now we made the constant term in the square root to be ! In order to use the formula, we need a perfect square after the subtraction in the square root. This is an easy fix since is a perfect square (a simple -sub here will make the problem matching up even more with the formula).  Let . Then , which implies that . Furthermore, when , ; when , Now we obtain   Observe that the integral now matches up perfectly with the formula! We can now evaluate this integral using FTC.       Integrals Involving Exponential Functions  This section also mentioned the integral formula involving exponential functions. Recall back in calculus 1, we learned about the derivative of the exponential functions as follows: Now we can rewrite this formula using integrals!   Integrals Involving Exponential Functions        Now that we have learned a lot of the integral formulas. Make sure to write them down on one sheet of paper so you can always look up the formulas in one place.  We will finish this section by looking at one more example.   Evaluate the definite integral    There is clearly a composite function in the integrand. What method can we consider trying?    There is an inside function of in the integrand. This is a cue that -sub may work.  Let . Then , and hence . This implies that       Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following integral using methods covered in class so far.                                  Evaluate the following indefinite integral using methods covered in class so far. Note that the two problems are similar. Are the answer also similar?                    Evaluate the following indefinite integral using methods covered in class so far. Note that the two problems are similar. Are the answer also similar?                   "
},
{
  "id": "sec58-FurtherIntegralFormulas-2-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#sec58-FurtherIntegralFormulas-2-2",
  "type": "Objectives",
  "number": "5.8",
  "title": "",
  "body": "  After this section, students will be able to:     integrate using integral formulas involving inverse trigonometric functions.    integrate using integral formulas involving exponential functions.    "
},
{
  "id": "sec58-FurtherIntegralFormulas-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#sec58-FurtherIntegralFormulas-3",
  "type": "Investigation",
  "number": "5.8.1",
  "title": "",
  "body": "  Evaluate the indefinite integral     Can we evaluate this integral using -sub?   We can certainly try using -sub and see if it will work out. Recall -sub undoes the chain rule for derivative, which is a method to differentiate a composite function. Typically, is some inside function in some composite function.  There are two choices of as an inside function you can pick. Try them! Will they work out? If not, what seems to be the issue?    Choice #1: Let  We cannot use -sub here. There are many issues that needs to be resolved in order to make progress... And  If we pick . Then , which implies that . But there is no factor of in the integrand that allows us substitute with . So we will get stuck here...  A possible way to resolve this issue is to isolate the entirely by dividing the to the other side (and pretending can never be zero). This implies that . By this substitution, we obtain Okay... but there is still an in the integrand. This is super confusing since the variable we are dealing with now is , not . Given our substitution that , we see that . Then the integral becomes Wow... the integral doesn't get easier after all this hard work... This should be an indicator to search for another method to evaluate this integral . -sub should make the integral easier to deal with, not harder.  If you are feeling a bit adventurous and want to continue with this line of work (to see if it will work out eventually), the next step will be to make another substitution by letting . Then and . Then we obtain Observe that this integral is almost the same as the integral given in the prompt, which means we looped back to the problem after all the hard work... Another way of saying this is that this method is inconclusive...    Choice #2: Let  Richard can tell right ahead that this choice of is also inconclusive (it will loop you back to the problem as well) due to his awesome math skills. But just in case he didn't lose his mind, he will present the work (and also convince himself that he is still young and he can do the math in his head).  Let . Then , which implies that We obtain Observe that this integral is (again) almost the same as the integral given in the prompt. We (again) looped back back to the problem after the hard work...     Evaluate this integral not using -sub, but using the hint given below.   This may seem like a totally irrelevant hint but what is the derivative of You learned this back in calculus 1 so feel free to look up your notes.   Clarifying the notation  The function means the inverse sine of .  Another famous notation for inverse sine is . Be careful with this exponent of . This doesn't mean the reciprocal of .  I will use both notations interchangeably.     Recall back in calculus 1, we learned about the derivative of inverse trigonometric function. One of the formulas is In other words, we can rewrite the above formula using integration as follows: Hence, we can evaluate this integral as follows:     "
},
{
  "id": "thm-IntegralInvolvingInverseTrig",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#thm-IntegralInvolvingInverseTrig",
  "type": "Theorem",
  "number": "5.8.3",
  "title": "Integrals Involving Inverse Trigonometric Functions.",
  "body": " Integrals Involving Inverse Trigonometric Functions        "
},
{
  "id": "subsec-581-Integral-InverseTrig-4",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-4",
  "type": "Note",
  "number": "5.8.4",
  "title": "Why do we only rewrite three of the six derivative formulas?",
  "body": " Why do we only rewrite three of the six derivative formulas?  Recall we have six inverse trigonometric functions. Why do we only have three integral formulas in the above theorem?  That is because of the \"co-\" in cosine, cotangent, and cosecant.  Recall the prefix \"co-\" in trigonometry means \"complementary angles\", meaning angles that add up to (or in radian). That is, given a ratio , we have the following identities: See that the three inverse trigonometric functions that has the \"co-\" in their names can be converted to the other three trigonometric functions. So that is why we only focus on three of the six inverse trigonometric functions when undoing the integral formulas (the other three are only differ by the signs).  "
},
{
  "id": "subsec-581-Integral-InverseTrig-5",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-5",
  "type": "Example",
  "number": "5.8.5",
  "title": "",
  "body": " Evaluate the indefinite integral    The bad news here is that we cannot simplify the fraction (there is nothing we can cancel here)...  You may try using -sub and it will work out if you use it smartly.  Here is Richard's hint: before using -sub, try splitting up the fraction as follows: Do we know how to integrate each term?    Using Richard's hint and linearity, we know that   Observe that there is a formula in we can use directly to evaluate the first integral. Hence, the first integral can be evaluated as follows:   For the second integral, we can evaluate it using -sub. Let . Then , and hence . This implies that   Putting these two pieces together, we obtain    "
},
{
  "id": "subsec-581-Integral-InverseTrig-9",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-9",
  "type": "Example",
  "number": "5.8.6",
  "title": "",
  "body": " Evaluate the definite integral    Observe that there are some inside functions in the integrand, so -sub may be a good way to go.  Let's try -sub first! Does -sub work out? Why or why not?  If you are open to another route to evaluate this integral, Richard will give a hint that the following formula may be helpful because of the resemblance.     You can verify it quickly that -sub doesn't work here. So Richard will try using the formula he gave in the hint.  To use the formula in the hint, observe that the constant term in the square root must be a . To make it happen, the trick to do here is factoring.   Now we made the constant term in the square root to be ! In order to use the formula, we need a perfect square after the subtraction in the square root. This is an easy fix since is a perfect square (a simple -sub here will make the problem matching up even more with the formula).  Let . Then , which implies that . Furthermore, when , ; when , Now we obtain   Observe that the integral now matches up perfectly with the formula! We can now evaluate this integral using FTC.    "
},
{
  "id": "thm-IntegralInvolvingGeneralExponential",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#thm-IntegralInvolvingGeneralExponential",
  "type": "Theorem",
  "number": "5.8.7",
  "title": "Integrals Involving Exponential Functions.",
  "body": " Integrals Involving Exponential Functions       "
},
{
  "id": "subsec-582-IntegralExponential-6",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-582-IntegralExponential-6",
  "type": "Example",
  "number": "5.8.8",
  "title": "",
  "body": " Evaluate the definite integral    There is clearly a composite function in the integrand. What method can we consider trying?    There is an inside function of in the integrand. This is a cue that -sub may work.  Let . Then , and hence . This implies that    "
},
{
  "id": "ws-sec58-3-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-3-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-3-4",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-3-5",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-4-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-4-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-4-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-5-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-5-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-5-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-5-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
