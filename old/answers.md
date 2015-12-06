<html>
<h1> CS 171 Pset 1 Questions </h1>
<div>
<h3> Michelle Choi </h3>



<body>
<p>
<h4>Question 1 </h4>

	1. The HTML source code is different from the DOM inspector because it represents the formatted information drawn from the data that the DOM inspector can then evaluate. The DOM inspector is useful because you can select a particular element and see its attributes and classes. Because the inspector highlights which element you are looking at the attributes/classes of, it is easy to determine which properties of an element of interest are faulty. Meanwhile the HTML source code allows you to look at all of the functions and elements at the same time so you can tell which functions are acting on the elements you are interested in.
	<div>
	2. The original data is stored in the data file that we originally loaded into our code (the countries.json). Github's markdown interpreter renders the table into html so we can see the table. 



<h4>Question 2 </h4>

	1. Because the other columns are number values, I would filter them the same way I filter the years. For example, I would use a slider that would isolate which countries had populations within a given range on the slider (i.e. countries would not need to have a population of exactly 5 mill, but between 5-7.5 million, when the slider is anywhere within the range of 5-7.5 million).


<h4>Question 3 </h4>

	1. I don't think you could aggregate by other columns. Each country is unique, and grouping countries with similar GDP's, LE's or populations does not give us unique information about those groups because there isn't necessarily a causal reason that they would have similar values for these traits. Though I could potentially aggregate by year (i.e. total world population any given year), this would make it impossible to use the year slider, which I think is a better data representation because it allows you to see change over time of more specific countries.


<h4>Question 4 </h4>

	1. It contains an array of objects that contain the GDP, LE and population for each year of each country. 
	

<h4>Question 5 </h4>

	1. SVG makes it easier for you to compare the values of each characteristic between different countries because you can distinguish the relative sizes of bars more readily than you can with numbers. Meanwhile, HTML allows you to make more absolute comparisons because you can look at the actual number values of each characteristic and compare them with one another to find the precise difference between the values of a given characteristic.

<h4>Question 7 </h4>

	1. Visualization is appropriate when there is a lot of data that needs to be synthesized in a meaningful manner in order to be comprehended by a viewer. For example, if we were to look at how sales of a large company have changed over time, visualization would help people unfamiliar with the exact details of the sales trends understand how overall quantities of sales have changed relative to one another. Moreover, the interactive nature of visualization allows people to isolate the exact data elements they are interested in exploring.
	<div>
	2. You can investigate how multiple data elements of one given item of interest (i.e. country, product, etc) change over time more easily. A static set up would require you to make multiple tables to display all of the data for multiple attributes for several years (a different table for each year) while a interactive table allows you to have one table with all of the data for a given time period, which you can adjust to see the data for different time periods.
	<div>
	3. Because visualizations take longer to set up than simply looking at a data set, they are not ideal for informing decisions that need to be made quickly. Also visualization requires the viewer to extrapolate how the data was formatted by the program.
	<div>
	4. Data semantics ensure that data is understandable to people unfamiliar with the syntax of how the data is stored, or to other databases that use different syntax to store the same data. In other words, it ensures that the symbols by which data is stored by is translatable to a real world application.
	<div>
	5. Values such as amount, length, and fill can be defined for ordinal and quantitative scales. Moreover, you can compare two qualitative attributes by coming up with a metric that converts qualitative comments into quantitative values. For example, surveys often convert qualitative assessments (i.e. feeling bad, good, or excellent to a scale from 1 to 10) that can be easily compared since some values are greater than others. You can compare quantitative attributes by mathematically comparing which values are greater than one another. For this reason I think it is easier to compare quantitative attributes than qualitative ones because it easier to make a more objective comparison. Additionally, categorical data can be assigned identity channels (i.e. location, color, etc), and can also be compared to determine equality. Finally, ordinal data can also be compared (by order) arithmetically. 
	<div>
	6. Examples of visual variables that are associative include length, size, saturation/color (i.e. opacity), values, and some shapes. 
	<div>
	7. Examples of visual variables that are quantitative also include position, size, length, and saturation/opacity.
</p>


</body>
</html>
