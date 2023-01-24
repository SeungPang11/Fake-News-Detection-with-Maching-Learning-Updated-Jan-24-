# Fake-News-Detection-with-Maching-Learning
_**Techniques**_: Naive Bayes, Logistics Regression, SVM, XGBoost, TF-IDF, SMOTE <br />
_**Tools**_: Python, Javascript, CSS, React, Flask

## Datasets
**[Fake News Net](https://github.com/KaiDMML/FakeNewsNet)** was used to experiment with the news content datasets and <br /> improve the accuracy and the challenges of imbalanced dataset while utilizing Maching Learning techniques. <br />

* _**politifact_fake.csv**_ - fake news collected from Politifact/ 432 rows, 4 columns 
* _**politifact_real.csv**_ - real news collected from Politifact/ 624 rows, 4 columns 
* _**gossipcop_fake.csv**_ - fake news collected from GossipCop/ 5323 rows, 4 columns 
* _**gossipcop_real.csv**_ - real news collected from GossipCop/ 16817 rows, 4 columns 


## Methods
____**TF-IDF**____<br />
* &emsp;Transform texts (news titles) into a meaningful representation of numbers while removing stopwords.

__**SMOTE**__<br />
* &emsp;Before SMOTE was used, the model was good at detecting real news (shown by very high True Positive score),<br /> 
&emsp;while performing poorly at detecting fake news (shown by low True Negative score).<br /> 

* &emsp;SMOTE tweaks the model to reduce False Negatives, at the cost of increasing False Positives.<br /> 
* &emsp;The result of using SMOTE is generally an increase in recall, at the cost of lower precision.

__**Naive Bayes**__<br />
* &emsp;Naive Bayes is an algorithm based on the Bayes Theorem and is widely used for classification <br /> 
&emsp;and Natural Language Processing (NLP) tasks.

__**Logistic Regression**__<br />
* &emsp;Logistic regression classifier is used for modeling the probability of a discrete outcome given an input variable.

__**Support Vector Machine**__<br />
* &emsp;SVM algorithm finds a hyperplane in an N-dimensional   
&emsp;space(the number of features) that distinctly classifies the data points.

__**XGBoost**__<br />
* &emsp;XGBoost is based on the gradient boosted trees algorithm, which is a supervised learning algorithm,<br /> 
&emsp;which attempts to accurately predict a target variable by combining the estimates of a set of simpler, weaker models.


## Result
* Logistic Regression and Naive Bayes were the best performing models for fake news detection.
* By combining Politifact and GossipCop datasets then utilizing Logistic Regression and SMOTE, 
the F1 score improved from **0.63 to 0.65**.
* FakeNewsNet’s F1 scores for GossipCop dataset are higher due to the greater number of real news compared to the number of fake news.

<img width="600" alt="Screen Shot 2023-01-24 at 10 04 40 AM" src="https://user-images.githubusercontent.com/67944800/214330043-f01df4ae-e13d-4e4d-ad3e-0f1fc33a6ccb.png">

**Web Application Development - Python, Javascript, CSS, React, Flask**
<img width="595" alt="Screen Shot 2023-01-20 at 10 21 10 AM" src="https://user-images.githubusercontent.com/67944800/214330280-93545534-3546-4fb9-af83-986c1ac6a820.png">





