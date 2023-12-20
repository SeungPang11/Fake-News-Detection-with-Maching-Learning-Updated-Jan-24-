# Fake-News-Detection-with-Maching-Learning
_**Techniques**_: Naive Bayes, Logistics Regression, SVM, XGBoost, TF-IDF, SMOTE <br />
_**Tools**_: Python, Javascript, CSS, React, Flask 

**Web Application Development - Python, Javascript, CSS, React, Flask**
<img width="595" alt="Screen Shot 2023-01-20 at 10 21 10 AM" src="https://user-images.githubusercontent.com/67944800/214330280-93545534-3546-4fb9-af83-986c1ac6a820.png">


## Datasets
**[Fake News Net](https://github.com/KaiDMML/FakeNewsNet)** <br />

* _**politifact_fake.csv**_ - 432 fake news collected from Politifact 
* _**politifact_real.csv**_ - 624 real news collected from Politifact 
* _**gossipcop_fake.csv**_ - 5323 fake news collected from GossipCop
* _**gossipcop_real.csv**_ - 16817 real news collected from GossipCop

## Exploratory Data Analysis
____**Find most frequent words of each dataset for further analysis**____<br />

**Gossip Cop Dataset** 

<img width="471" alt="GC_RN" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/976eb157-ec00-4dac-83ca-c9e8ab2da5da"> 
<img width="471" alt="GC_FN" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/d1e827cf-c9e2-4f74-bd87-435245fd4325">

**Politifact Dataset** 

<img width="454" alt="PF_TN" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/19971e51-ffb4-475b-b48e-abbb9dc1c862">
<img width="454" alt="PF_RN" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/aac9e9af-d3a0-4c4e-b426-6edcc1534db0">



## Methods
____**TF-IDF**____<br />
* Transform texts (news titles) into a meaningful representation of numbers while removing stopwords.

__**SMOTE**__<br />
* Before SMOTE, the model was good at detecting real news (shown by high True Positive score),<br /> 
while performing poorly at detecting fake news (shown by low True Negative score).<br /> 

* SMOTE is used to tweak the model to reduce False Negatives, at the cost of increasing False Positives.<br /> 

* The result of using SMOTE is generally an increase in recall, at the cost of lower precision.

__**Naive Bayes**__<br />
* Naive Bayes is an algorithm based on the Bayes Theorem and is widely used for classification <br /> 
and Natural Language Processing (NLP) tasks.

__**Logistic Regression**__<br />
* Logistic regression classifier is used for modeling the probability of a discrete outcome given an input variable.

__**Support Vector Machine**__<br />
* SVM algorithm finds a hyperplane in an N-dimensional space(the number of features) that distinctly classifies the data points.

__**XGBoost**__<br />
* XGBoost is based on the gradient-boosted trees algorithm, which is a supervised learning algorithm.<br /> 
* It attempts to predict a target variable by combining the estimates of a set of simpler models.

## Result - Updated Dec 2023
* Updated text pre-processing to remove emojis 
* Improved performance
* 

## Previous Result
* Logistic Regression and Naive Bayes were the best performing models for fake news detection.
* By combining Politifact and GossipCop datasets then utilizing Logistic Regression and SMOTE, 
the F1 score improved from **0.63 to 0.65**.
* FakeNewsNet’s F1 scores for GossipCop dataset are higher due to the greater number of real news compared to the number of fake news.

* Confusion Matrix - Before and After SMOTE
<img width="419" alt="Screen Shot 2023-10-31 at 8 09 50 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/2397b3aa-c612-42d7-9caa-ad729ce65374">


* Performance of This Project
<img width="600" alt="Screen Shot 2023-01-24 at 10 04 40 AM" src="https://user-images.githubusercontent.com/67944800/214330043-f01df4ae-e13d-4e4d-ad3e-0f1fc33a6ccb.png">

* Performance of the Previous Research <br />
<img width="600" alt="Screen Shot 2023-01-01 at 11 38 23 AM copy" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/0f25ebec-6e85-463c-98b7-b82e4806ceba">







